import classNames from 'classnames';
import React from 'react';
import Card from './Components/Card';
// import countriesRequest  from './api/CountriesApi';

const SearchResults = () => {
    const data = require("/public/data.json");
    const [cardPageStatus, setCardPageStatus] = React.useState(false)
    function changeCardPageStatus (){
        setCardPageStatus(prev=>!prev)
    }
    const [currentCardData, setCardData] = React.useState({})
    function changeCardData (cardData){
        setCardData(cardData)
    }
    const cards = data.map(item =>{
        return(
            <Card
            key={item.name}
            data = {item}
            cardPageStatus={cardPageStatus}
            changeCardPageStatus = {changeCardPageStatus}
            changeCardData = {changeCardData}
            />
        )
    })

    return (
        <div className={classNames("search-results")}>
            {cardPageStatus ? 
            <Card
                key={currentCardData.name}
                data = {currentCardData}
                cardPageStatus={cardPageStatus}
                changeCardPageStatus = {changeCardPageStatus}
                changeCardData = {changeCardData}
            /> : cards
            }
        </div>
    )
}

export default SearchResults