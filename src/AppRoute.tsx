import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./views/home";
import View1 from "./views/sample1";
import View2 from "./views/sample2";
import View3 from "./views/sample3";
import NotFound from "./views/notFound";
import ReduxSample1 from "./views/sampleReduxOverlay";
import ReduxSample2 from "./views/sampleReduxOverlay2";
const AppRoute: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/sample1" component={View1} />
      <Route path="/sample2" component={View2} />
      <Route path="/sample3" component={View3} />
      <Route path="/redux1" component={ReduxSample1} />
      <Route path="/redux2" component={ReduxSample2} />
      <Route exact path="*" component={NotFound} />
    </Switch>
  );
};

export default AppRoute;
