import { Grid, styled, useTheme, Typography, Hidden } from "@mui/material";
import React, { useState } from "react";

type Props = {
  hidden: boolean;
};

const Condition: React.FC<Props> = (props) => {
  const { hidden, children } = props;

  if (hidden) {
    return <></>;
  }

  return <>{children}</>;
};

export default Condition;
