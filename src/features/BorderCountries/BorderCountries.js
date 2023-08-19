import React from 'react';
import "./styles/BorderCountries.scss";
import classNames from 'classnames';
import { DarkModeContext } from '../../app/context/DarkModeContext';
const BorderCountries = ({borders, changeCardData, fullData}) => {
    const {darkMode} = React.useContext(DarkModeContext);
    function neighbourSearch(code){
        return fullData.find(item=>item.alpha3Code === code)
    }
    let buttons;
    if(borders){
        buttons = borders.map(b => {
            return(
                <button className={classNames("border-countries__btn", darkMode ? "dark" : "")} key={b} onClick={()=>changeCardData(neighbourSearch(b))}>{neighbourSearch(b).name}</button>
            )
        })
    }

    return (
        <div className="border-countries">
            {buttons && <h4 className="border-countries__heading">border countries:</h4>}
            <div className='border-countries__btns-container'>
                {buttons && buttons}
            </div>
        </div>
    )
}

export default BorderCountries