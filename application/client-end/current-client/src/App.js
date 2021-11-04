import Logo from "./components/Logo";
import UploadDog from "./components/UploadDog";
import Menu from "./components/Menu";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from "./components/About";
// import FileUpload from "./components/FileUpload";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <Router>
      <div>
        <Menu />
        <Route path="/" exact render={(props) => (
          <>
            <Logo />
            <div className="contentContainer">
              <UploadDog />
            </div>
          </>
        )} />
        <Route path="/about" component={About} />
        <Route path="/user-profile" component={UserProfile} />
        <footer>
          <Link to="/about">About the Devs</Link>
        </footer>
      </div>
    </Router>
  );
}

export default App;
