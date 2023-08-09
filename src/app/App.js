import React from "react";
import { VisualModeContext } from "./VisualModeContext";
import MainPage from "../pages/MainPage/MainPage";
import "./styles/App.scss"
import classNames from "classnames";

function App (){
    const [darkMode, setDarkMode] = React.useState(false);
    const [page, setPage] = React.useState({currentPage: MainPage});
    let darkModeClass = darkMode ? "dark" : "";
    function changeMode(){
        setDarkMode(prev=>!prev);
    }
    return (
        
        <div className={classNames("app-container", darkModeClass)}>
            <VisualModeContext.Provider value={{darkMode, changeMode}}>
                <page.currentPage />
            </VisualModeContext.Provider>
        </div>
        
    )
}
export {App}