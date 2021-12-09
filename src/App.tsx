import {
  Backdrop,
  CircularProgress,
  CssBaseline,
  styled,
  ThemeProvider,
} from "@mui/material";
import React from "react";

import { useSelector } from "react-redux";
import { SnackbarProvider } from "notistack";
import theme from "./theme";
import AppRoute from "./AppRoute";
import { useSessionContext, SessionContext } from "./hooks/useSession";
import { IRootState } from "./store/rootState";
import SPALayout from "./views/spaLayout";
import "./App.css";

const StyledBackdrop = styled(Backdrop)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  color: "#fff",
}));
const StyledSnackbarProvider = styled(SnackbarProvider)(({ theme }) => ({
  variantError: {
    backgroundColor: "#f5c7c0",
    color: "#5d5b5b",
  },
}));
const App: React.FC = () => {
  const overlay = useSelector((x: IRootState) => x.overlay);
  const [session, setSession] = useSessionContext();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <StyledSnackbarProvider
        maxSnack={1}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <SessionContext.Provider
          value={{ state: session, dispatch: setSession }}
        >
          <div id="wrapper">
            <SPALayout>
              <AppRoute />
            </SPALayout>
          </div>
          <StyledBackdrop open={overlay.openWaitingSite}>
            <CircularProgress color="inherit" />
          </StyledBackdrop>
        </SessionContext.Provider>
      </StyledSnackbarProvider>
    </ThemeProvider>
  );
};

export default App;
