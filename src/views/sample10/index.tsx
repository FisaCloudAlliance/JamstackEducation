import { Button, Grid } from "@mui/material";
import { useSample10 } from "./useSample10";

/* 
    Buttonに関するサンプルコードは https://mui.com/components/buttons/ にあります
*/

type Props = {};

/**
 * 初めての カスタム hooks のお勉強　①　ボタンクリック時の動作を tsx ではなく、カスタムHooksのTSに宣言しよう！
 * @param props
 * @returns
 */
const Sample10: React.FC<Props> = (props) => {
  const context = useSample10();
  return (
    // Grid conteiner / Grid item は HTML のレイアウト構成の基本になるものです。react に限らず多くのCSSフレームワークが採用しているレイアウトの考え方です
    <Grid container>
      <Grid item xs={12} sm={6} md={4}>
        <Button
          variant="contained"
          onClick={() => context.action1()} /** ラムダで紐付けるパターン */
        >
          Contained
        </Button>
      </Grid>

      <Grid
        item
        xs={12}
        sm={6}
        md={4}
        
      >
        <Button variant="text" onClick={context.action2} > Text</Button>
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
        <Button variant="outlined" onClick={() => context.sampleAction()}>
          Outlined
        </Button>
      </Grid>
    </Grid>
  );
};

export default Sample10;
