import React from 'react'

const Card = ({data, changeCardPageStatus, changeCardData}) => {
  return (
    <section key={data.name} onClick={()=>{
        
        changeCardPageStatus()
        console.log(changeCardData)
        changeCardData(data)
        }}>
        <img src={data.flags.svg} style={{width: "100px"}}/>
        <h3>{data.name}</h3>
        <p>population: {data.population}</p>
        <p>region: {data.region}</p>
        <p>capital: {data.capital}</p>
    </section>
  )
}

export default Card