import { Grid } from "@mui/material";
import React from "react";
import { useHome} from "./useHome";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

type Props = {};

/** home 画面の外観を定義する rsx ファイル */
const View: React.FC<Props> = (props) => {
  const { children, ...rest } = props;
const context = useHome();

  return (
    // Grid のコンテナー属性のあるものが、1つの箱になる
    <Grid container>
      {
        /* 
        箱の中は12分割してレイアウトを構成する
        */
      }
      <Grid item xs={6} sx={{ backgroundColor: "#F2987D" }}>
        Hello
        <Stack spacing={2} direction="row">
        <Button variant="text">リンク</Button>
        <Button variant="contained">ＯＫ</Button>
        <Button variant="outlined">ログイン</Button>
      </Stack>
      </Grid>
      <Grid item xs={6} sx ={{ backgroundColor: ""}}>
        World
      </Grid>
      <Grid item xs={6} sx ={{ backgroundColor: "#C1DBDA"}}>
        ふくおかクラウドアライアンス
      </Grid>
      <Grid item xs={6} sx ={{ backgroundColor: "#F2987D"}}>
      <Stack spacing={2} direction="row">
        <Button variant="text">リンク</Button>
        <Button variant="contained">ＯＫ</Button>
        <Button variant="outlined">ログイン</Button>
      </Stack>
      </Grid>
    </Grid>
  );
};

export default View;
