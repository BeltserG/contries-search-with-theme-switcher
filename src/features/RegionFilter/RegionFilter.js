import React from "react";
import "./styles/RegionFilter.scss";
import expandMore from "./assets/expand_more_FILL0_wght400_GRAD200_opsz24.svg";
import classNames from "classnames";
import { DarkModeContext } from "../../app/context/DarkModeContext";

const RegionFilter = ({changeSearchRequest})=>{
    const [selectedValue, setselectedValue] = React.useState("Filter by Region")
    const [selectListOpened, setselectedListOpened] = React.useState(false);
    const {darkMode} = React.useContext(DarkModeContext)
    function clickFilter(e){
        if(e.target.classList.contains("filter__select--option")){
            setselectedValue(e.target.value)
            changeSearchRequest(e.target.value, "region");
            setselectedListOpened(prev=>!prev);
        }
        if(e.target.parentElement.classList.contains("filter__select--selected") || 
           e.target.classList.contains("filter__select--selected")){
            setselectedListOpened(prev=>!prev);
        }
    }
    return(
        <>
        {/* <div className="filter">
            <select onChange={(e)=>changeSearchRequest(e.target.value, "region")} className="filter__select">
                <option className="filter__select--option" value="none">none</option>
                <option className="filter__select--option" value="africa">africa</option>
                <option className="filter__select--option" value="americas">americas</option>
                <option className="filter__select--option" value="asia">asia</option>
                <option className="filter__select--option" value="europe">europe</option>
                <option className="filter__select--option" value="oceania">oceania</option>
            </select>
        </div> */}
        <div className={classNames("filter__select", darkMode ? "filter__select-dark" : "")} onClick={clickFilter}>
            <div className="filter__select--selected">
                <span>{selectedValue}</span>
                <img className={classNames("expand-more-image", selectListOpened ? "select-list-opened" : "")}src={expandMore}></img>
            </div>
            
            <div className={classNames("options-container", selectListOpened ? "options-container-opened": "")}>
                <option className="filter__select--option" value="none">none</option>
                <option className="filter__select--option" value="africa">africa</option>
                <option className="filter__select--option" value="americas">americas</option>
                <option className="filter__select--option" value="asia">asia</option>
                <option className="filter__select--option" value="europe">europe</option>
                <option className="filter__select--option" value="oceania">oceania</option>
            </div>
        </div>
        </>
    )
}

export {RegionFilter}