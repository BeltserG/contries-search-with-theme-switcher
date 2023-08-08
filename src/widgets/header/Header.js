import React from "react";
import imageLightMode from "./assets/dark_mode_FILL0_wght200_GRAD200_opsz40.svg";
import imageDarkMode from "./assets/dark_mode_FILL1_wght200_GRAD200_opsz40.svg";
import "./styles/Header.scss";

const Header = (props) =>{
    return(
        <header className="header">
            <h1 className="header__main-heading">Where in the world?</h1>
            <div className="header__color-theme" onClick={()=>props.changeMode()}>
                <img className="header__color-theme--icon" src={
                    props.darkMode ? imageDarkMode : imageLightMode
                }/>
                <div className="header__color-theme--text">Dark Mode</div>
            </div>
        </header>
    )
}

export{Header}