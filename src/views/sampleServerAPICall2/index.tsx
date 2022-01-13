import { Button, Grid, Typography } from "@mui/material";
import { useSampleServerAPICall2 } from "./useSampleServerAPICall2";

type Props = {};

const SampleServerAPICall2: React.FC<Props> = (props) => {
　const { value, onClickAsync } = useSampleServerAPICall2();
  return (
    <Grid container>
      <Grid item xs={12} sm={6}>
        <Button
          variant="contained"
          onClick={async () => await onClickAsync()}
        >
          API Call
        </Button>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography>
            {value}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default SampleServerAPICall2;
