import React from 'react';
import Card from '../Card/Card';
import "./styles/AllResults.scss"

const AllResults = ({searchRequest, changeCardPageStatus, changeCardData}) => {
    const cards = searchRequest.map(item =>{
        return(
            <Card
                key = {item.name}
                data = {item}
                changeCardPageStatus = {changeCardPageStatus}
                changeCardData = {changeCardData}
            />
        )
    })
    return (
    <div className='all-results'>
        {cards}
    </div>
    )
}

export default AllResults