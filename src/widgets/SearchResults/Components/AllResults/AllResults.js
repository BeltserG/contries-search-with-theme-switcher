import React from 'react';
import Card from '../Card';

const AllResults = ({data, changeCardPageStatus, changeCardData}) => {
    const cards = data.map(item =>{
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