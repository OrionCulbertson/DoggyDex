import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { About, Menu, Home, UserProfile, CreateAccount, Login, DogFoundCard } from "./components"
// import DogFoundCard from "./components/DogFoundCard";

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
