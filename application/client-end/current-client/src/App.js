import Logo from "./components/Logo";
import UploadDog from "./components/UploadDog";
import Menu from "./components/Menu";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from "./components/About";
import UserProfile from "./components/UserProfile";
import { Provider } from "react-redux";
import store from "./store";
import Home from "./components/Home";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Menu />
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/user-profile" component={UserProfile} />
          <footer>
            <Link to="/about">About the Devs</Link>
          </footer>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
