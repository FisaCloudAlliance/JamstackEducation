import { Grid, styled, useTheme, Typography, Avatar } from "@mui/material";
import React from "react";
import { Account } from "../useSample3";

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

type Props = {
  account: Account;
  existsStories: boolean;
};

const StoryIcon: React.FC<Props> = (props) => {
  const { account, existsStories, ...rest } = props;
  const theme = useTheme();

  return (
    <>
      <Grid item sx={{ padding: `${theme.spacing(1)}`, width: "80px" }}>
        {/* <Grid
          container
          sx={{
            padding: "5px",
            borderRadius: "50%",
            width: "100%",
            border: existsStories ? "1px solid red" : "1px solid gray",
          }}
        >
          <Avatar src={account.pic} sx={{ width: 70, height: 70 }} />
        </Grid> */}
        <StyledStoriesImg
          sx={{
            border: existsStories ? "1px solid red" : "1px solid gray",
          }}
          src={account.pic}
        />
        <EllipsTypography sx={{ textOverflow: "ellipsis" }}>
          {account.userName}
        </EllipsTypography>
      </Grid>
    </>
  );
};

export default StoryIcon;
