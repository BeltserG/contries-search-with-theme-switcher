import classNames from 'classnames';
import React from 'react';
import CountryView from './Components/CountryView/CountryView';
import AllResults from './Components/AllResults/AllResults';
// import countriesRequest  from './api/CountriesApi';

const SearchResults = () => {
    console.log('SearchResults rendering...');
    const data = require("/public/data.json");
    const [cardPageStatus, setCardPageStatus] = React.useState(false)
    function changeCardPageStatus (){
        setCardPageStatus(prev=>!prev)
    }
    const [currentCardData, setCardData] = React.useState({})
    function changeCardData (cardData){
        setCardData(cardData)
    }
    // const cards = data.map(item =>{
    //     return(
    //         <Card
    //         key={item.name}
    //         data = {item}
    //         cardPageStatus={cardPageStatus}
    //         changeCardPageStatus = {changeCardPageStatus}
    //         changeCardData = {changeCardData}
    //         />
    //     )
    // })

    return (
        <div className={classNames("search-results")}>
            {cardPageStatus ? 
            <CountryView
                key="country-view"
                data = {currentCardData}
                cardPageStatus={cardPageStatus}
                changeCardPageStatus = {changeCardPageStatus}
                changeCardData = {changeCardData}
                fullData = {data}
            /> :
            <AllResults
                key="results"
                data = {data}
                cardPageStatus={cardPageStatus}
                changeCardPageStatus = {changeCardPageStatus}
                changeCardData = {changeCardData}
            />
            }
        </div>
    )
}

export default SearchResults