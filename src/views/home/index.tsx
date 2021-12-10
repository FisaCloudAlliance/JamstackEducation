import { Grid } from "@mui/material";
import React from "react";
import { useHome } from './useHome';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

type Props = {};

/**
 * home 画面の外観を定義する　tsxファイル
 * @param props 
 * @returns 
 */
const View: React.FC<Props> = (props) => {
  const { children, ...rest } = props;
  const context = useHome();
  return (
    //Grid のコンテナー属性のあるものが、１つの箱となる。
    <Grid container>
      {/** 12分割してレイアウトを構成する **/}
      <Grid item xs={6} sx={{ backgroundColor: "#F2987D" }}>
        Hello
        <Stack spacing={2} direction="row">
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
        </Stack>
      </Grid>
      <Grid item xs={6} sx ={{ backgroundColor: ""}}>
        World
        <Checkbox {...label} defaultChecked />
        <Checkbox {...label} />
        <Checkbox {...label} disabled />
        <Checkbox {...label} disabled checked />
      </Grid>
      <Grid item xs={4} sx ={{ backgroundColor: "#C1DBDA"}}>
        ふくおかクラウドアライアンス
      </Grid>
    </Grid>
  );
};

export default View;
