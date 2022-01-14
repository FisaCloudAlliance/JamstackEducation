import { Grid, styled, useTheme, Typography } from "@mui/material";
import React from "react";
import { Account, Posts, Sample3Manager } from "../useSample3";
import PostsDetaile from "./postsDetaile";

type Props = {
  context: Sample3Manager;
};

const TimeLine: React.FC<Props> = (props) => {
  const { context, ...rest } = props;
  const theme = useTheme();

  return (
    <Grid container>
      {context.postsList.map((posts) => {
        const account = context.friendList.FirstOrDefault(
          (x) => x.userName === posts.userName
        );
        return <PostsDetaile profilePic={account.pic} posts={posts} />;
      })}
    </Grid>
  );
};

export default TimeLine;
