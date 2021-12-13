import { Grid } from "@mui/material";
import React from "react";
import { useHome } from "./useHome";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

type Props = {};
const View: React.FC<Props> = (props) => {
  const { children, ...rest } = props;
  const context = useHome();

  return (
    // Gridのコンテナ属性のあるものが、1つの箱になる
    <Grid container>
      {/** 
       * 箱の中は12分割してレイアウトを構成する
       */}
      <Grid item xs={3} sx={{ backgroundColor: "#F2987D" }}>
        <Stack spacing={2} direction="row">
          <Button variant="text">リンクボタン</Button>
          <Button variant="contained">OKOK</Button>
          <Button variant="outlined">ログイン</Button>
        </Stack>
      </Grid>
      <Grid item xs={5} sx ={{ backgroundColor: ""}}>
        World
      </Grid>
      <Grid item xs={4} sx ={{ backgroundColor: "#C1DBDA"}}>
        ふくおかクラウドアライアンス
      </Grid>
      <Grid item xs={4} sx ={{ backgroundColor: "#F2987D"}}>
        ふくおかクラウドアライアンス
      </Grid>
      <Grid item xs={4} sx ={{ backgroundColor: "#"}}>
        ふくおかクラウドアライアンス
      </Grid>
      <Grid item xs={4} sx ={{ backgroundColor: "#C1DBDA"}}>
        ふくおかクラウドアライアンス
      </Grid>
    </Grid>
  );
};

export default View;
