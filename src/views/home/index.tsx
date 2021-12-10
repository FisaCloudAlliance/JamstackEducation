/** 画面の外観を定義する tsxファイル */
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
    // Gridのcontainer属性で箱を作る
    <Grid container>
      {/* 箱の中を12分割してレイアウトを構成する */}
      <Grid item xs={4} sx={{ backgroundColor: "#F2987D" }}>
        <Stack spacing={2} direction="row">
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
        </Stack>
      </Grid>
      <Grid item xs={4} sx ={{ backgroundColor: ""}}>
        World
      </Grid>
      <Grid item xs={4} sx ={{ backgroundColor: "#C1DBDA"}}>
        ふくおかクラウドアライアンス
      </Grid>
    </Grid>
  );
};

export default View;
