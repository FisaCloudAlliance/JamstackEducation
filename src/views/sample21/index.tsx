import { Checkbox, Grid, Typography } from "@mui/material";
import { useSample21 } from "./useSample21";

type Props = {};
const Sample21: React.FC<Props> = (props) => {
  // const {  } = useSample21();
  return (
    <Grid container>
      <Grid item xs={12} sm={6}>
        <Checkbox
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography>今のチェック状態は  です</Typography>
      </Grid>
    </Grid>
  );
};

export default Sample21;
