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
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/add" component={Add} />
        <Route path="/recurring" component={Recurring} />
        <Route path="/analysis" component={Analysis} />
        <Route path="/report" component={Report} />
        <Route path="/" exact component={Login} />
      </BrowserRouter>
    </>
  );
}

export default App;
