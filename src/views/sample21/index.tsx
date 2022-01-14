import { Checkbox, Grid, Typography } from "@mui/material";
import { useSample21 } from "./useSample21";

type Props = {};
const Sample21: React.FC<Props> = (props) => {
  const { value, onCheckChanged } = useSample21();
  return (
    <Grid container>
      <Grid item xs={12} sm={6}>
        <Checkbox
          checked={value}
          onChange={(e) => onCheckChanged(e.target.checked)}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography>今のチェック状態は{value.toString()} です</Typography>
      </Grid>
    </Grid>
  );
};

export default Sample21;
