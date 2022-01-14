import { Grid, styled, useTheme, Typography } from "@mui/material";
import React from "react";
import { Sample3Manager } from "../useSample3";
import StoryIcon from "./storyIcon";

type Props = {
  context: Sample3Manager;
};

const StoryIconList: React.FC<Props> = (props) => {
  const { context, ...rest } = props;
  const theme = useTheme();

  return (
    <Grid container sx={{ height: "100px" }}>
      {context.friendList.map((account) => {
        const existsStories = context.storyList.Any(
          (s) => s.userName === account.userName
        );
        return <StoryIcon account={account} existsStories={existsStories} />;
      })}
    </Grid>
  );
};

export default StoryIconList;
