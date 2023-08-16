import React from "react";
import classNames from "classnames";
import imageLightMode from "./assets/dark_mode_FILL0_wght200_GRAD200_opsz40.svg";
import imageDarkMode from "./assets/dark_mode_FILL1_wght200_GRAD200_opsz40.svg";
import { DarkModeContext } from '../../app/context/DarkModeContext';
import "./styles/Header.scss";

const Header = () =>{
    const {darkMode, toggleDarkMode} = React.useContext(DarkModeContext)
    return(
        <div className={classNames("header", darkMode ? "header-dark" : "")}>
            <h1 className="header__main-heading">Where in the world?</h1>
            <div className="header__color-theme" onClick={()=>toggleDarkMode()}>
                <img className="header__color-theme--icon" src={
                    darkMode ? imageDarkMode : imageLightMode
                }/>
                <div className="header__color-theme--text">Dark Mode</div>
            </div>
        </div>
    )
}

export{Header}