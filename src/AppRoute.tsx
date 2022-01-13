import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./views/home";
import View1 from "./views/sample1";
import View2 from "./views/sample2";
import View3 from "./views/sample3";
import NotFound from "./views/notFound";
import ReduxSample1 from "./views/sampleReduxOverlay";
import ReduxSample2 from "./views/sampleReduxOverlay2";
import Sample10 from './views/sample10';
import Sample20 from "./views/sample20";
import Sample11 from "./views/sample11";
import Sample21 from "./views/sample21";
import Sample30 from "./views/sample30";
import Sample31 from "./views/sample31";
import Sample40 from "./views/sample40";
import Sample41 from "./views/sample41";
import SampleServerAPICall from "./views/sampleServerAPICall";
import SampleServerAPICall2 from './views/sampleServerAPICall2';
const AppRoute: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/sample1" component={View1} />
      <Route path="/sample2" component={View2} />
      <Route path="/sample3" component={View3} />

      <Route path="/sample10" component={Sample10} />
      <Route path="/sample11" component={Sample11} />
      <Route path="/sample20" component={Sample20} />
      <Route path="/sample21" component={Sample21} />
      <Route path="/sample30" component={Sample30} />
      <Route path="/sample31" component={Sample31} />
      <Route path="/sample40" component={Sample40} />
      <Route path="/sample41" component={Sample41} />

      <Route path="/redux1" component={ReduxSample1} />
      <Route path="/redux2" component={ReduxSample2} />

      <Route path="/api1" component={SampleServerAPICall} />
      <Route path="/api2" component={SampleServerAPICall2} />

      <Route exact path="*" component={NotFound} />
    </Switch>
  );
};

export default AppRoute;
