import React from 'react';

const BorderCountries = ({borders, changeCardData, fullData}) => {
    function neighbourSearch(code){
        return fullData.find(item=>item.alpha3Code === code).name
    }
    let buttons;
    if(borders){
        buttons = borders.map(b => {
            return(
                <button key={b} onClick={()=>changeCardData(b)}>{neighbourSearch(b)}</button>
            )
        })
    }

    return (
    <>
        {buttons && <h4>border countries</h4>}
        {buttons && buttons}
    </>

    )
}

export default BorderCountries