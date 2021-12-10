import { Grid } from "@mui/material";
import React from "react";
import {useHome} from "./useHome"
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


type Props = {};
/**home画面の外観を定義するtsxファイル */
const View: React.FC<Props> = (props) => {
  const { children, ...rest } = props;
  const context = useHome();

  return (
    // Gridのコンテナー属性のあるものが、一つの箱になる
    <Grid container>
      {/**
      箱の中は１２分割してレイアウトを構成する
      item xs={2} 一番小さいレイアウトサイズでも２分割を適用する 
      */}
      <Grid item xs={6} sx={{ backgroundColor: "#F2987D" }}>

      <Stack spacing={2} direction="row">
      <Button variant="text">リンクボタン</Button>
      <Button variant="contained">OK！</Button>
      <Button variant="outlined">ログイン</Button>

    </Stack>
      </Grid>
      <Grid item xs={6} sx ={{ backgroundColor: ""}}>
        World
      </Grid>
      <Grid item xs={6} sx={{ backgroundColor: "#F2987D" }}>
        !!!
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
