import { Button, Grid, TextField } from "@mui/material";
import { id } from "date-fns/locale";
import { useSample41 } from "./useSample41";

type Props = {};

const Sample41: React.FC<Props> = (props) => {
  const { id, name, onClick } = useSample41();
  return (
    <Grid container>
      <Grid item xs={12} sm={6} md={4}>
        <TextField
          label="会員番号"
          placeholder="7000000000"
          type="tel" /* type tel の場合、スマホだと数字入力のみのキーボードがせりあがるので、数値入力が楽になるhackコード */
          InputLabelProps={{ shrink: true }}
          value={id.state}
          onChange={(e) => id.onChange(e.target.value)}
          error={id.hasError}
          helperText={id.errorMessage}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <TextField
          label="会員名"
          placeholder="西部 太郎"
          type="text"
          InputLabelProps={{ shrink: true }}
          value={id.state}
          onChange={(e) => id.onChange(e.target.value)}
          error={id.hasError}
          helperText={id.errorMessage}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Button onClick={onClick}>一括Validationの実行！</Button>
      </Grid>
    </Grid>
  );
};

export default Sample41;
