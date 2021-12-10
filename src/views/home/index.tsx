import { Grid } from "@mui/material";
import React from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

type Props = {};
const View: React.FC<Props> = (props) => {
  const { children, ...rest } = props;
  return (
    <Grid container>
      <Grid item xs={4} sx={{ backgroundColor: "#F2987D" }}>

      <Stack spacing={2} direction="row">
      <Button variant="text">あ</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      
    </Stack>
        Hello
      </Grid>
      <Grid item xs={4} sx ={{ backgroundColor: ""}}>
        World
      </Grid>
      <Grid item xs={4} sx ={{ backgroundColor: "#C1DBDA"}}>
        ふくおかクラウドアライアンス
      </Grid>
    </Grid>
  );
};

export default View;
