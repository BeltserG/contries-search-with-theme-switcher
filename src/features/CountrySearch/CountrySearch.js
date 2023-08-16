import React from "react";
import classNames from "classnames";
import loupe from "./assets/search_FILL1_wght300_GRAD200_opsz40.svg"
import "./styles/CountrySearch.scss"
import { DarkModeContext } from '../../app/context/DarkModeContext';
const cn = require("classnames");

const CountrySearch = ({changeSearchRequest})=>{
    const {darkMode} = React.useContext(DarkModeContext)
    return(
        <div className={classNames("country-search", darkMode ? "country-search-dark": "")}>
            <label htmlFor="country-search" className="country-search__label">
                <img src={loupe} className="country-search__label__img"/>
            </label>
            <input onChange={(e)=>{changeSearchRequest(e.target.value, "name")}} type="text" name="country-search" id="country-search" placeholder="Search for a country..." className="country-search__input"/>
        </div>
    )
}

export {CountrySearch};