import { Grid } from "@mui/material";
import React from "react";
import { useHome } from "./useHome";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

type Props = {};

/** home 画面の外観を定義する tsx ファイル */
const View: React.FC<Props> = (props) => {
  const { children, ...rest } = props;
  const context = useHome();

  return (
    // Grid のコンテナー属性のあるものが、一つの箱になる。
    <Grid container>
      {/**
       * 箱の中は 12 分割してレイアウトを構成する。
       * item xs={2} 一番小さいレイアウトサイズでも、2分割を適用する。
       */}
      <Grid item xs={2} sx={{ backgroundColor: "#F2987D" }}>
        <Stack spacing={2} direction="row">
          <Button variant="text">Link</Button>
          <Button variant="contained">OK!!</Button>
          <Button variant="outlined">login</Button>
        </Stack>
      </Grid>
      <Grid item xs={2} sx={{ backgroundColor: "" }}>
        World
      </Grid>
      <Grid item xs={2} sx={{ backgroundColor: "#F2987D" }}>
        Hello
      </Grid>
      <Grid item xs={2} sx={{ backgroundColor: "" }}>
        World
      </Grid>
      <Grid item xs={2} sx={{ backgroundColor: "#F2987D" }}>
        Hello
      </Grid>
      <Grid item xs={2} sx={{ backgroundColor: "" }}>
        World
      </Grid>
    </Grid>
  );
};

export default View;
