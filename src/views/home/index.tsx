import { Grid } from "@mui/material";
import React from "react";
import { useHome } from "./useHome";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

type Props = {};

/** home 画面の外観を実装する tsx　ファイル*/
const View: React.FC<Props> = (props) => {
  const { children, ...rest } = props;
const context = useHome();

  return (
    // <Grid のコンテナ属性のあるものが、一つの箱になる。
    // 箱の中は12分割してレイアウトを構成する。
    <Grid container>
      <Grid item xs={4} sx={{ backgroundColor: "#F2987D" }}>
        Hello

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
