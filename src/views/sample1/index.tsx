import { Grid } from "@mui/material";
import React from "react";

type Props = {};
const View: React.FC<Props> = (props) => {
  const { children, ...rest } = props;
  return (
    <Grid container>
      <Grid item xs={3}>aaa</Grid>
      <Grid item xs={3}>bbb</Grid>
      <Grid item xs={3}>ccc</Grid>
      <Grid item xs={3}>ddd</Grid>
    </Grid>
  );
};

export default View;
