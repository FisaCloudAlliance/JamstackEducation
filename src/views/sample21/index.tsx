import { Checkbox, Grid, Typography } from "@mui/material";
import { useSample21 } from "./useSample21";

type Props = {};
const Sample21: React.FC<Props> = (props) => {
  const { check, onCheckChanged } = useSample21();
  return (
    <Grid container>
      <Grid item xs={12} sm={6}>
        <Checkbox
        checked={check}
        onChange={(e)=>onCheckChanged(e.target.checked)}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography>今のチェック状態は{check.toString()}です</Typography>
      </Grid>
    </Grid>
  );
};

export default Sample21;
