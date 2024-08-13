import React from "react";
import "./mainPage.css";
import IncrementalCounter from "./IncrementalCounter";
import birthday from "./birthday.jpg";
import person2 from "./person2.JPEG";

const MainPage = () => {
    const backgroundStyle = {
        backgroundImage: `url(${birthday})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
    };

    return (
        <div style={backgroundStyle}>
            <div className="wrappe">
                <h1>Happy Birthday</h1>
                <div className="sidePanel">
                    <img src={person2} alt="Person" />
                </div>
                <div className="counterBox">
                    <IncrementalCounter startDate="2003-07-23T00:00:00" />
                </div>
            </div>
        </div>
    );
};

export default MainPage;
