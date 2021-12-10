import { Grid } from "@mui/material";
import React from "react";
import { useHome } from "./useHome";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

type Props = {};
/**
 * home画面の外観を定義する　tsxファイル
 * @param props
 * @returns
 */
const View: React.FC<Props> = (props) => {
  const { children, ...rest } = props;
  const context = useHome();
  return (
    // Grid のコンテナー属性野あるものが、1つの箱になる
    <Grid container>
      {/* 箱の中は12分割してレイアウトを構成する */}
      <Grid item xs={4} sx={{ backgroundColor: "#ecb2cd96" }}>
        <Grid container>Hello</Grid>
        <Grid container>
          <Stack spacing={2} direction="row">
            <Button variant="text">Link</Button>
            <Button variant="contained">Container</Button>
            <Button variant="outlined">Line</Button>
          </Stack>
        </Grid>
        <Grid container>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Label"
            />
            <FormControlLabel
              disabled
              control={<Checkbox />}
              label="Disabled"
            />
          </FormGroup>
        </Grid>
      </Grid>
      <Grid item xs={1} sx={{ backgroundColor: "" }}>
        World
      </Grid>
      <Grid item xs={2} sx={{ backgroundColor: "#C1DBDA" }}>
        Hey
      </Grid>
      <Grid item xs={3} sx={{ backgroundColor: "#45b2aecf" }}>
        Hey
      </Grid>
      <Grid item xs={2} sx={{ backgroundColor: "" }}>
        Hello
      </Grid>
      <Grid item xs={6} sx={{ backgroundColor: "#ffbb76cc" }}>
        Word
      </Grid>
      <Grid item xs={6} sx={{ backgroundColor: "#ecb2cd96" }}>
        Hello
      </Grid>
    </Grid>
  );
};

export default View;
