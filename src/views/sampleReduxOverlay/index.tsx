import { Button, Grid } from "@mui/material";
import React from "react";
import { useSampleReduxOverlay } from "./useSampleReduxOverlay";

type Props = {};
const View: React.FC<Props> = (props) => {
  const { children, ...rest } = props;
  // 外観に関するバインド用のプロパティや関数は、このようにカスタムHooksに内包し
  // tsx のレイアウト用ファイルから関数として外部に切り出す
  const context = useSampleReduxOverlay();
  return (
    <Grid
      container
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Grid item xs={6}>
        <Button
          variant="contained"
          onClick={async () => await context.onClickAsync()}
        >
          くるくるを出す
        </Button>
      </Grid>
    </Grid>
  );
};

export default View;
