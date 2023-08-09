import classNames from 'classnames';
import React from 'react';
import countriesRequest  from './api/CountriesApi';

const SearchResults = () => {
    const data = require("/public/data.json");
    const cards = data.map(item =>{
        return(
            <section key={item.name}>
                <img src={item.flags.svg} style={{width: "100px"}}/>
                <h3>{item.name}</h3>
                <p>population: {item.population}</p>
                <p>region: {item.region}</p>
                <p>capital: {item.capital}</p>
            </section>
        )
    })

    return (
        <div className={classNames("search-results")}>
            {cards}
        </div>
    )
}

export default SearchResults