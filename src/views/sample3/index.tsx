import { Grid, styled, useTheme, Typography } from "@mui/material";
import React from "react";
import StoryIconList from "./story/storyIconList";
import TimeLine from "./timeLine/timeLine";
import { useSample3 } from "./useSample3";

const StyledStoriesImg = styled("img")(({ theme }) => ({
  borderRadius: "50%",
  // border: "1px solid red",
  padding: "5px",
  width: "100%",
}));

const EllipsTypography = styled(Typography)(({ theme }) => ({
  width: "100%",
  textOverflow: "ellipsis",
  overflow: "hidden",
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 1,
  fontSize: "12px",
}));

type Props = {};

const View: React.FC<Props> = (props) => {
  const { children, ...rest } = props;
  const theme = useTheme();

  const context = useSample3();

  return (
    <>
      <Grid container>
        <StoryIconList context={context} />
        <TimeLine context={context} />
      </Grid>
    </>
  );
};

export default View;
