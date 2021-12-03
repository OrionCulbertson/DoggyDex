import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { About, Menu, Home, UserProfile, CreateAccount, LogIn, DoggyDex, DogInfo, Testing } from "./components"

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="pageContainer">
          <div className="allContent">
            <Menu />
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/user-profile" component={UserProfile} />
            <Route path="/log-in" component={LogIn} />
            <Route path="/create-account" component={CreateAccount} />
            <Route path="/doggydex" component={DoggyDex} />
            <Route path="/doginfo/" component={DogInfo} />
            <Route path="/testing" component={Testing} />
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
