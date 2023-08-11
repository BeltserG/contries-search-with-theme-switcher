import React from 'react';
import BorderCountries from '../../../features/BorderCountries/BorderCountries';

const Card = ({data, cardPageStatus, changeCardPageStatus, changeCardData, fullData}) => {
  let content = ()=>{
    return (
      <>
        <img src={data.flags.svg} style={{width: "100px"}}/>
        <h3>{data.name}</h3>
        {cardPageStatus && <p>native name: {data.nativeName}</p>}
        <p>population: {data.population}</p>
        <p>region: {data.region}</p>
        {cardPageStatus && <p>sub region: {data.subregion}</p>}
        <p>capital: {data.capital}</p>
        {cardPageStatus && <p>top level domain: {data.topLevelDomain}</p>}
        {cardPageStatus && <p>currencies: {data.currencies.map(item=>item.name).join(", ")}</p>}
        {cardPageStatus && <p>languages: {data.languages.map(item=>item.name).join(", ")}</p>}
        {cardPageStatus && <BorderCountries 
          fullData={fullData}
          changeCardData={changeCardData}
          borders={data?.borders}/>}
      </>
    )
  };
  return (
    <section key={data.name} onClick={()=>{
        if(!cardPageStatus){
            changeCardPageStatus()
            changeCardData(data)
        }
      }}>
      {content()}
    </section>
  )
}

export default Card