import React from "react";
import "./styles/RegionFilter.scss";

const RegionFilter = ({changeSearchRequest})=>{
    function clickFilter(e){
        if(e.target.classList.contains("filter__select--option")){
            changeSearchRequest(e.target.value, "region");
        }
    }
    return(
        <>
        <div className="filter">
            <select onChange={(e)=>changeSearchRequest(e.target.value, "region")} className="filter__select">
                <option className="filter__select--option" value="">Filter by Region</option>
                <option className="filter__select--option" value="africa">africa</option>
                <option className="filter__select--option" value="americas">americas</option>
                <option className="filter__select--option" value="asia">asia</option>
                <option className="filter__select--option" value="europe">europe</option>
                <option className="filter__select--option" value="oceania">oceania</option>
            </select>
        </div>
        <div className="filter__select" onClick={clickFilter}>
            <option className="filter__select--option" value="">Filter by Region</option>
            <option className="filter__select--option" value="africa">africa</option>
            <option className="filter__select--option" value="americas">americas</option>
            <option className="filter__select--option" value="asia">asia</option>
            <option className="filter__select--option" value="europe">europe</option>
            <option className="filter__select--option" value="oceania">oceania</option>
        </div>
        </>
    )
}

export {RegionFilter}