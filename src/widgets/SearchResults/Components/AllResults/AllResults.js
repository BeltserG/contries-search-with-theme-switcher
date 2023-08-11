import React from 'react';
import Card from '../Card';

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
    <>
        {cards}
    </>
    )
}

export default AllResults