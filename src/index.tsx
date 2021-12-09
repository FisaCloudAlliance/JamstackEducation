import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  Router,
  Route,
  RouteComponentProps,
} from "react-router-dom";
// import { Router } from "react-router";
import { ConnectedRouter } from "connected-react-router";
import { QueryParamProvider } from "use-query-params";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { CookiesProvider } from "react-cookie";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import "./core";
import "./global";
import store, { persistor } from "./store/allStore";
import history from "./history";


ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <Provider store={store}>
        <QueryParamProvider ReactRouterRoute={Route}>
          <PersistGate persistor={persistor}>
            <ConnectedRouter history={history}>
              <CookiesProvider>
                <App />
              </CookiesProvider>
            </ConnectedRouter>
          </PersistGate>
        </QueryParamProvider>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
