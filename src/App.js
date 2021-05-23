import { BrowserRouter, Route } from "react-router-dom";

import Login from "./components/Login/Login";
import Add from "./components/Add/Add";
import Report from "./components/Report/Report";

import Dashboard from "./components/Dashboard/Dashboard";
import "./App.scss";
import Recurring from "./components/Recurring/Recurring";
import Analysis from "./components/Analysis/Analysis";

function App() {
  return (
    <>
      <BrowserRouter>
        <Route
          path="/expense-manager-react-java/dashboard"
          component={Dashboard}
        />
        <Route path="/expense-manager-react-java/add" component={Add} />
        <Route
          path="/expense-manager-react-java/recurring"
          component={Recurring}
        />
        <Route
          path="/expense-manager-react-java/analysis"
          component={Analysis}
        />
        <Route path="/expense-manager-react-java/report" component={Report} />
        <Route path="/expense-manager-react-java/" exact component={Login} />
      </BrowserRouter>
    </>
  );
}

export default App;
