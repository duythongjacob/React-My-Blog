import Home from "./Pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./Pages/single/Single.jsx"
import Write from "./Pages/write/Write.jsx"
import Settings from "./Pages/settings/Settings.jsx"
import Login from "./Pages/login/Login.jsx"
import Register from "./Pages/register/register";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  const currentUser = false;
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/posts/">
          <Home />
        </Route>
        <Route path="/register">
          {currentUser ? <Home /> : <Register />}
        </Route>
        <Route path="/login">{currentUser ? <Home /> : <Login />}</Route>
        <Route path="/post/:id">
          <Single />
        </Route>
        <Route path="/write">{currentUser ? <Write /> : <Register />}</Route>
        <Route path="/settings">{currentUser ? <Settings /> : <Register />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;