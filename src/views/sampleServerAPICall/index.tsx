import { Button, Grid, Typography } from "@mui/material";
import { useSampleServerAPICall } from "./useSampleServerAPICall";

type Props = {};

const SampleServerAPICall: React.FC<Props> = (props) => {
　const { value, onClickAsync } = useSampleServerAPICall();
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

export default SampleServerAPICall;
