import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import store from "./store";
import { About, Menu, Home, UserProfile, CreateAccount, Login, DogFoundCard } from "./components"

function App() {
  return (
      <Router>
        <div>
          <Menu />
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/user-profile" component={UserProfile} />
          <Route path="/log-in" component={Login} />
          <Route path="/create-account" component={CreateAccount} />
          <footer>
            <Link to="/about">About the Devs</Link>
          </footer>
        </div>
      </Router>
  );
}

export default App;
