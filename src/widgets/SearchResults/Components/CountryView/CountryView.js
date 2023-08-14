import React from 'react';
import Card from '../Card/Card';
import BackButton from './Components/BackButton.jsx';
import "./style/CountryView.scss";

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