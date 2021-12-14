import {
  Avatar,
  Card,
  CardActionArea,
  CardHeader,
  CardMedia,
  Grid,
  IconButton,
} from "@mui/material";
import React from "react";
import SimpleDialog from "./simpleDialog";
import { useSampleReduxOverlay2 } from "./useSampleReduxOverlay2";
import AddIcon from "@mui/icons-material/Add";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";

/** この関数型UIコンポーネントへの引数を示す */
type Props = {};

/**
 * /redux2 にアクセスした際の外観を定義する
 * @param props この関数型UIコンポーネントへの引数を示す
 * @returns
 */
const View: React.FC<Props> = (props) => {
  /** 引数を個別のメンバーにばらす children は全ての関数型UIコンポーネントが持つ子要素。...rest はその他のメンバー全てを示す */
  const { children, ...rest } = props;
  /** この関数型UIの状態(プロパティ)や振る舞い(メソッド)をカスタムhooks に切り出し、取得する */
  const context = useSampleReduxOverlay2();
  /** return 以降がこの関数型UIの外観定義となる */
  return (
    <>
      <Grid container sx={{ height: "100%" }}>
        {/* 
            xsはスマホサイズの場合を示し、12分割中の12なので、スマホでは画面いっぱいにカードを表示
            sm , md と少しずつ画面の幅が増えるに連れて、12分割中の6、3と画面幅に合わせて
            カードの幅を調整する フレキシブルレイアウト の例
        */}
        <Grid item xs={12} sm={6} md={3} sx={{ padding: "10px" }}>
          {/* Cardコンポーネントは https://mui.com/components/cards/ 参照 */}
          <Card variant="outlined" sx={{ height: "250px" }}>
            <CardActionArea
              sx={{
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={() => context.dialoContext.show()}
            >
              <AddIcon sx={{ height: "3rem", width: "3rem" }} />
            </CardActionArea>
          </Card>
        </Grid>

        {/* redux に 永続化したデータから、配列の cards を取り出し、forloop によって、外観を繰り返し定義する */}
        {context.cards.map((x) => (
          <Grid item xs={12} sm={6} md={3} sx={{ padding: "10px" }}>
            {/* Cardコンポーネントは https://mui.com/components/cards/ 参照 */}
            <Card variant="outlined" sx={{ height: "250px" }}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    {x.title?.substring(0, 1)}
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={x.title}
                subheader={x.description}
              />
              <CardMedia
                component="img"
                height="194"
                image="https://source.unsplash.com/random?nature"
                sx={{
                  height: "100%",
                }}
              />
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* ダイアログのコンポーネントは画面には呼び出されたタイミングまでレンダリングされない */}
      <SimpleDialog
        open={context.dialoContext.open}
        close={context.dialoContext.close}
        okAction={context.dialoContext.okAction}
        title={context.dialoContext.model.title}
        description={context.dialoContext.model.description}
      />
    </>
  );
};

export default View;
