import React from 'react';
import Card from '../Card';
import BackButton from './Components/BackButton.jsx';

const CountryView = ({data, changeCardPageStatus, changeCardData, cardPageStatus, fullData}) => {
  return (
    <div className='country-view'>
        <BackButton
            changeCardPageStatus = {changeCardPageStatus}
        />
        <Card
            key={data.name}
            data = {data}
            cardPageStatus={cardPageStatus}
            changeCardPageStatus = {changeCardPageStatus}
            changeCardData = {changeCardData}
            fullData = {fullData}
        />
    </div>
  )
}

export default CountryView