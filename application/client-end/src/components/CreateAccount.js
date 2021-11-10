import { Route, Link } from "react-router-dom"
import {Menu, Logo, LoginForm} from "../components"

const CreateAccount = () => {
    return (
        <div>
            <Menu />
            <Route path="/log-in" render={() => (
                <>
                    <Logo />
                    <div className="contentContainer">
                        <LoginForm />
                    </div>
                </>
                )} />
            <footer>
            <Link to="/about">About the Devs</Link>
            </footer>
        </div>
    );
}

export default CreateAccount;
