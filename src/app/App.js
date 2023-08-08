import React from "react";
import {Header} from "../widgets/header/Header"
import {CountrySearch} from "/src/features/CountrySearch/CountrySearch"
import "./styles/App.scss"
const cn = require('classnames');

function App (){
    const [darkMode, setDarkMode] = React.useState(false);
    let darkModeClass = darkMode ? "dark" : "";
    function changeMode(){
        setDarkMode(prev=>!prev);
    }
    return (
        <div className={cn(darkModeClass)}>
            <Header
                changeMode={changeMode}
                darkMode={darkMode}
            />
            <CountrySearch/>
        </div>
    )
}

export {App}