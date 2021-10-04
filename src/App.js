import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./componentes/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route path="*" component={() => <h1>Not found</h1>} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
