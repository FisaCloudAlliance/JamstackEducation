import { Button, Grid, TextField } from "@mui/material";

type Props = {};

const Sample41: React.FC<Props> = (props) => {
  // const {  } = useSample41();
  return (
    <Grid container>
      <Grid item xs={12} sm={6} md={4}>
        <TextField
          label="会員番号"
          placeholder="7000000000"
          type="tel" /* type tel の場合、スマホだと数字入力のみのキーボードがせりあがるので、数値入力が楽になるhackコード */
          InputLabelProps={{ shrink: true }}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <TextField
          label="会員名"
          placeholder="西部 太郎"
          type="text"
          InputLabelProps={{ shrink: true }}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Button>一括Validationの実行！</Button>
      </Grid>
    </Grid>
  );
};

export default Sample41;
