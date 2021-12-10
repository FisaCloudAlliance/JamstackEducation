import { Grid } from "@mui/material";
import React from "react";

import { useHome } from "./useHome";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

type Props = {};
/**
 * home 画面の外観を定義するtsxファイル
 */
const View: React.FC<Props> = (props) => {
  const { children, ...rest } = props;
  const context = useHome();
  return (
    // Grid のコンテナ属性のあるものが一つの箱になる
    <Grid container>
      {/** 箱の中は12分割してレイアウトを構成する 
       * item xs={2} 一番小さいレイアウトサイズでも２分割
      */}
      <Grid item xs={4} sx={{ backgroundColor: "#F2987D" }}>
        Hello
      </Grid>
      <Grid item xs={4} sx ={{ backgroundColor: ""}}>
        World
      </Grid>
      <Grid item xs={4} sx ={{ backgroundColor: "#C1DBDA"}}>
        ふくおかクラウドアライアンス
      </Grid>
      <Grid item xs={4} sx ={{ backgroundColor: "#C1DBDA"}}>
        workspace1
      </Grid>
      <Grid item xs={4} sx ={{ backgroundColor: "#C1DBDA"}}>
        workspace2
      </Grid>
      <Grid item xs={4} sx ={{ backgroundColor: "#C1DBDA"}}>
      <Stack direction="row" spacing={2}>
      <Button color="secondary">Secondary</Button>
      <Button variant="contained" color="success">
        Success
      </Button>
      <Button variant="outlined" color="error">
        Error
      </Button>
    </Stack>
      </Grid>
    </Grid>
);
};

export default View;
