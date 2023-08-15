import React from 'react';
import "./styles/BorderCountries.scss";

const BorderCountries = ({borders, changeCardData, fullData}) => {
    function neighbourSearch(code){
        return fullData.find(item=>item.alpha3Code === code)
    }
    let buttons;
    if(borders){
        buttons = borders.map(b => {
            return(
                <button className='border-countries__btn' key={b} onClick={()=>changeCardData(neighbourSearch(b))}>{neighbourSearch(b).name}</button>
            )
        })
    }

    return (
        <div className="border-countries">
            {buttons && <h4 className="border-countries__heading">border countries</h4>}
            <div className='border-countries__btns-container'>
                {buttons && buttons}
            </div>
        </div>
    )
}

export default BorderCountries