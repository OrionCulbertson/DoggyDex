import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import store from "./store";

import { About, Menu, Home, UserProfile, CreateAccount, LogIn, DoggyDex, DogInfo, DogFoundCard, Tester } from "./components"
import { Logo } from './components';

function App() {
  return ( 
    <Provider store={store}>
      <Router>
        <div>
          <Menu />
          <Logo/>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/user-profile" component={UserProfile} />
          <Route path="/log-in" component={LogIn} />
          <Route path="/create-account" component={CreateAccount} />
          <Route path="/doggydex" component={DoggyDex} />
          <Route path="/doginfo/" component={DogInfo} />
          <Route path="/tester" component={Tester} />
          {/* <footer>
            <Link to="/about">About the Devs</Link>
          </footer> */}
        </div>
      </Router>
    </Provider>
  );
}

export default App;
