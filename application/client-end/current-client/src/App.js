import Logo from "./components/Logo";
import UploadDog from "./components/UploadDog";
import Menu from "./components/Menu";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from "./components/About";
import  DoggyDex  from "./components/DoggyDex";
// import FileUpload from "./components/FileUpload";
import UserProfile from "./components/UserProfile";
import axios from "axios";

function App() {

  
  return (
    <Router>
      <div>
        <Menu />
        <Route
          path="/"
          exact
          render={(props) => (
            <>
              <Logo />
              <div className="contentContainer">
                <UploadDog />
              </div>
            </>
          )}
        />
        <Route path="/about" component={About} />
        <Route path="/user-profile" component={UserProfile} />
        <Route path="/doggydex" component={DoggyDex} />
        <footer>
          <Link to="/about">About the Devs</Link>
        </footer>
      </div>
    </Router>
  );
}

export default App;
