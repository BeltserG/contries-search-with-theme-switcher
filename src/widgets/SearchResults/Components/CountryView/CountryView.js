import React from 'react';
import Card from '../Card';

const CountryView = ({data, changeCardPageStatus, changeCardData, cardPageStatus}) => {
  return (
    <div className='country-view'>
        <Card
            key={data.name}
            data = {data}
            cardPageStatus={cardPageStatus}
            changeCardPageStatus = {changeCardPageStatus}
            changeCardData = {changeCardData}
        />
    </div>
  )
}

export default CountryView