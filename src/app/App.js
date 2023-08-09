import React from "react";
import MainPage from "../pages/MainPage/MainPage";
import "./styles/App.scss"
import classNames from "classnames";

function App (){
    const [darkMode, setDarkMode] = React.useState(false);
    let darkModeClass = darkMode ? "dark" : "";
    function changeMode(){
        setDarkMode(prev=>!prev);
    }
    return (
        <div className={classNames("app-container", darkModeClass)}>
            <MainPage
                changeMode={changeMode}
                darkMode={darkMode}
            />
        </div>
    )
}
export {App}