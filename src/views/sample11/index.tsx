import { Button, Grid } from "@mui/material";
import { useSample11 } from "./useSample11";

type Props = {};

const Sample11: React.FC<Props> = (props) => {
  const context = useSample11();
  return (
    <Grid container>
      <Grid item xs={12} sm={6} md={4}>
        <Button onClick={() => context.action1()} variant="contained">Hello</Button>
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
        <Button onClick={() => context.action2()} variant="text">World</Button>
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
        <Button onClick={() => context.sampleAction()} variant="outlined">Heelo World!</Button>
      </Grid>
    </Grid>
  );
};

export default Sample11;
