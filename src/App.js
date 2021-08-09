import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Index from "./components/Index";
import New from "./components/New";
import Edit from "./components/Edit";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/new" component={New} />
        <Route exact path="/:id/edit" component={Edit} />
      </Switch>
    </Router>
  );
}

export default App;
