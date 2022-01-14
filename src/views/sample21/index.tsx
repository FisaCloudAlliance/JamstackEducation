import { Checkbox, Grid, Typography } from "@mui/material";
import { useSample21 } from "./useSample21";

type Props = {};
const Sample21: React.FC<Props> = (props) => {
  const { c, onChanged } = useSample21();
  return (
    <Grid container>
      <Grid item xs={12} sm={6}>
        <Checkbox
          checked={c}
          onChange={e => onChanged(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography>今のチェック状態は {c.toString()} です</Typography>
      </Grid>
    </Grid>
  );
};

export default Sample21;
