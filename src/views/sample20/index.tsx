import { Checkbox, Grid, Typography } from "@mui/material";
import { useSample20 } from "./useSample20";

type Props = {};
const Sample20: React.FC<Props> = (props) => {
  // sample10 とは異なり、context としてオブジェクトとして取得するのではなく、その中のメンバーを直接取得するTypeScriptの記法
  const { value, onCheckChanged } = useSample20();
  return (
    <Grid container>
      <Grid item xs={12} sm={6}>
        {/* checkbox のサンプルソースは、https://mui.com/components/checkboxes/　を参照 */}
        <Checkbox
          checked={value}
          onChange={(e) => onCheckChanged(e.target.checked)}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        {/* Typoegraphy は ラベルの役割を持ちます。　https://mui.com/components/typography/ */}
        <Typography>今のチェック状態は {value.toString()} です</Typography>
        {/* tsx の中では、タグを利用することでHTMLを作成しますが、その中で、TypeScriptのコードを記述する場合は { } を利用します  */}
      </Grid>
    </Grid>
  );
};

export default Sample20;
