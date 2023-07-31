import React from "react";

const Header = () =>{
    return(
        <header className="header">
            <h1 className="header__main-heading">Where in the world?</h1>
            <div className="header__color-theme">
                <img className="header__color-theme--icon" src=""/>
                <div className="header__color-theme--text"></div>
            </div>
        </header>
    )
}

export{Header}