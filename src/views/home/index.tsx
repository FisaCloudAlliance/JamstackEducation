import { Grid } from "@mui/material";
import React from "react";
import { useHome } from './useHome';

type Props = {};

/** home 画面の外観を定義する tsx　ファイル */
const View: React.FC<Props> = (props) => {
  const { children, ...rest } = props;
  const context = useHome();

  return (
    // Grid のコンテナー属性のあるものが、１つの箱になる。
    <Grid container>
      {/* 箱の中は12分割してレイアウトを構成する。 
      基本、この12分割後のものをどう割り当てるかでレイアウトを決定する。
      ピクセル単位だと環境依存が強くなる
      HTMLとか触らなくても作成できるのがすごいのよね～
      */}
      <Grid item xs={2} sx={{ backgroundColor: "#F2987D" }}>
        Hello
      </Grid>
      <Grid item xs={2} sx ={{ backgroundColor: ""}}>
        morimori
      </Grid>
      <Grid item xs={2} sx ={{ backgroundColor: "#C1DBDA"}}>
        moriougai
      </Grid>
      <Grid item xs={2} sx={{ backgroundColor: "#F2987D" }}>
        takirentarou
      </Grid>
      <Grid item xs={2} sx ={{ backgroundColor: ""}}>
        nice omochi
      </Grid>
      <Grid item xs={2} sx ={{ backgroundColor: "#C1DBDA"}}>
        rpm installできねんだわ
      </Grid>
      {/* 合計12を超えた分は、折り返して下に表示される。こういうのを利用して、
        　フェイスブックのカードとかは一覧表示されているらしい */}
    </Grid>
  );
};

export default View;
