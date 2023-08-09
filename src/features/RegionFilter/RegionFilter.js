import React from "react";
import "./styles/RegionFilter.scss";

const RegionFilter = ()=>{
    return(
        <div className="filter">
            <select className="filter__select">
                <option value="africa">africa</option>
                <option value="america">america</option>
                <option value="asia">asia</option>
                <option value="europe">europe</option>
                <option value="oceania">oceania</option>
            </select>
        </div>
    )
}

export {RegionFilter}