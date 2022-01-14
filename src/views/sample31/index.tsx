import { Button, Grid, TextField, Typography } from "@mui/material";
import { useSample31 } from "./useSample31";

type Props = {};

const Sample31: React.FC<Props> = (props) => {
  const { state, onClick } = useSample31();
  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid container>
          <Grid item xs={12} sm={6} md={4}>
            {/* https://mui.com/components/text-fields/ */}
            <TextField
              label="〇×番号"
              placeholder="7000000000"
              type="tel" /* type tel の場合、スマホだと数字入力のみのキーボードがせりあがるので、数値入力が楽になるhackコード */
              InputLabelProps={{ shrink: true }}

              
              value={state.state}
              onChange={(e) => state.onChange(e.target.value)}
              error={state.hasError}
              helperText={state.errorMessage}
            />
          </Grid>
          <Grid xs={12} sm={6} md={4}>
            <Typography>現在の入力値：{state.state}</Typography>
          </Grid>
          <Grid xs={12} sm={6} md={4}>
            <Button　onClick={onClick}>Validationの実行！</Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Sample31;
