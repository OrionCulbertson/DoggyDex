import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div style={{
           width: `100vw`,
           display: `flex`,
           justifyContent: `center`,
        }}>
            <h4>Login Page!</h4>
            <Link to="/">Go Back to home</Link>
        </div>
    )
}

export default Login;
