import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Logo from "./components/Logo";
import UploadDog from "./components/UploadDog";
import Menu from "./components/Menu";
import About from "./components/About";
import LogIn from "./components/LogIn";
import UserProfile from "./components/UserProfile";
import CreateAccount from "./components/CreateAccount";
// import FileUpload from "./components/FileUpload";

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
                <Route path="/log-in" component={LogIn} />
                <Route path="/create-account" component={CreateAccount} />
                <footer>
                    <Link to="/about">About the Devs</Link>
                </footer>
            </div>
        </Router>
    );
}

export default App;
