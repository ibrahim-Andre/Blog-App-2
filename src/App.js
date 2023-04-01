import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Navigation from "./components/Navigation";
import PageRenderer from "./page-renderer";

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/:page" component={PageRenderer} />
          <Route path="/" render={() => <Redirect to="/home" />} />
          <Route component={() => 404} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
