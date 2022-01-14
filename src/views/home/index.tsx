import { Grid } from "@mui/material";
import React from "react";

type Props = {};
const View: React.FC<Props> = (props) => {
  const { children, ...rest } = props;
  return (
    <Grid container>
      <Grid item xs={6} sx={{ backgroundColor: "#F2987D" }}>
        Hello!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      </Grid>
      <Grid item xs={2} sx ={{ backgroundColor: ""}}>
        World
      </Grid>
      <Grid item xs={4} sx ={{ backgroundColor: "#C1DBDA"}}>
        ふくおかクラウドアライアンス
      </Grid>
    </Grid>
  );
};

export default View;
