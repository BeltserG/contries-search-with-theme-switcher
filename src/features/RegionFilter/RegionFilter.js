import React from "react";
import "./styles/RegionFilter.scss";

const RegionFilter = ({changeSearchRequest})=>{
    return(
        <div className="filter">
            <select onChange={(e)=>changeSearchRequest(e.target.value, "region")} className="filter__select">
                <option value="">none</option>
                <option value="africa">africa</option>
                <option value="americas">americas</option>
                <option value="asia">asia</option>
                <option value="europe">europe</option>
                <option value="oceania">oceania</option>
            </select>
        </div>
    )
}

export {RegionFilter}