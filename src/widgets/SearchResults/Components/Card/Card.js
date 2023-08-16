import React from 'react';
import BorderCountries from '../../../../features/BorderCountries/BorderCountries';
import "./styles/Card.scss";
import classNames from 'classnames';
import { DarkModeContext } from '../../../../app/context/DarkModeContext';

const Card = ({data, cardPageStatus, changeCardPageStatus, changeCardData, fullData}) => {
  const {darkMode} = React.useContext(DarkModeContext)
  let content = ()=>{
    return (
      <>
        <img className='card__flag' src={data.flag}/>
        <div className="card__info">
          <h3 className='card__info--country-name'>{data.name}</h3>
          {cardPageStatus && <p className='card__info--country-name-native'><span className=''>native name:</span> {data.nativeName}</p>}
          <p className='card__info--population'><span className=''>population:</span> {data.population.toLocaleString()}</p>
          <p className='card__info--region'><span className=''>region:</span> {data.region}</p>
          {cardPageStatus && <p><span className=''>sub region:</span> {data.subregion}</p>}
          <p className='card__info--capital'><span className=''>capital:</span> {data.capital}</p>
          {cardPageStatus && <p className='card__info--domain'><span className=''>top level domain:</span> {data.topLevelDomain}</p>}
          {cardPageStatus && <p className='card__info--currencies'><span className=''>currencies:</span> {data.currencies.map(item=>item.name).join(", ")}</p>}
          {cardPageStatus && <p className='card__info--languages'><span className=''>languages:</span> {data.languages.map(item=>item.name).join(", ")}</p>}
          {cardPageStatus && <BorderCountries
            fullData={fullData}
            changeCardData={changeCardData}
            borders={data?.borders}/>}
        </div>
      </>
    )
  };
  return (
    <section className={classNames("card", darkMode ? "card-dark" : "", cardPageStatus ? "fullview" : "")} key={data.name} onClick={()=>{
        if(!cardPageStatus){
            changeCardData(data)
            changeCardPageStatus()  
        }
      }}>
      {content()}
    </section>
  )
}

export default Card