import React from "react";
import image from "./assets/dark_mode_FILL0_wght200_GRAD200_opsz40.svg";
import "./styles/Header.scss";

const Header = () =>{
    return(
        <header className="header">
            <h1 className="header__main-heading">Where in the world?</h1>
            <div className="header__color-theme">
                <img className="header__color-theme--icon" src={image}/>
                <div className="header__color-theme--text">Dark Mode</div>
            </div>
        </header>
    )
}

export{Header}