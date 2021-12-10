import { Grid } from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useHome } from "./useHome";

type Props = {};
/**
 * home 画面の外観を定義する tsx ファイル
 * @param props
 * @returns
 */
const View: React.FC<Props> = (props) => {
  const { children, ...rest } = props;
  const context = useHome();
  return (
    // Gridのコンテナ属性のあるものが1つの箱になる
    <Grid container>
      {/* 箱の中は12分割してレイアウトを構成する */}
      <Grid item xs={4} sx={{ backgroundColor: "#F2987D" }}>
        Hello
      </Grid>
      <Grid item xs={4} sx={{ backgroundColor: "#F2987D" }}>
        Hello
      </Grid>
      <Grid item xs={4} sx={{ backgroundColor: "" }}>
        <Stack spacing={2} direction="row">
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default View;
