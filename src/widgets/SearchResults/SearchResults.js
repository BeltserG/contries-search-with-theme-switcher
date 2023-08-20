import classNames from 'classnames';
import React from 'react';
import "./styles/SearchResults.scss"
import CountryView from './Components/CountryView/CountryView';
import AllResults from './Components/AllResults/AllResults';
// import countriesRequest  from './api/CountriesApi';

const SearchResults = ({searchRequest, fullData, changeCardPageStatus, cardPageStatus}) => {
    // const [cardPageStatus, setCardPageStatus] = React.useState(false)
    // function changeCardPageStatus (){
    //     setCardPageStatus(prev=>!prev)
    // }

    const [currentCardData, setCardData] = React.useState({})
    function changeCardData (cardData){
        setCardData(cardData)
    }

    return (
        <div className={classNames("search-results")}>
            {cardPageStatus ? 
            <CountryView
                key="country-view"
                data = {currentCardData}
                cardPageStatus={cardPageStatus}
                changeCardPageStatus = {changeCardPageStatus}
                changeCardData = {changeCardData}
                fullData = {fullData}
            /> :
            <AllResults
                key="results"
                searchRequest = {searchRequest}
                cardPageStatus={cardPageStatus}
                changeCardPageStatus = {changeCardPageStatus}
                changeCardData = {changeCardData}
            />
            }
        </div>
    )
}

export default SearchResults