import React from "react";
import "./login.css";
import happy from "./happy.jpg";

const Login = () => {
    const backgroundStyle = {
        backgroundImage: `url(${happy})`,
        backgroundSize: 'cover', // Ensures the image covers the entire viewport
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100%',
        position: 'fixed',
        top: 0,
        left: 0,
    };
    return (
        <div style={backgroundStyle}>
            <div className="wrapper">
                <form action="">
                    <h1>Login</h1>
                    <div className="input-box">
                        <input type="text" placeholder="username" required />
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="password" required />
                    </div>
                    <button type="submit" onClick={() => window.location.href="mainPage"}>Login</button>
                    <div className="register-link">
                        <p>Don't have an account? <a href="#">Register</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
