import React from "react";
import loupe from "./assets/search_FILL1_wght300_GRAD200_opsz40.svg"
import "./styles/CountrySearch.scss"
const cn = require("classnames");

const CountrySearch = ({changeSearchRequest})=>{
    return(
        <div className="country-search">
            <label htmlFor="country-search" className="country-search__label">
                <img src={loupe} className="country-search__label__img"/>
            </label>
            <input onChange={(e)=>{changeSearchRequest(e.target.value, "name")}} type="text" name="country-search" id="country-search" placeholder="Search for a country..." className="country-search__input"/>
        </div>
    )
}

export {CountrySearch};