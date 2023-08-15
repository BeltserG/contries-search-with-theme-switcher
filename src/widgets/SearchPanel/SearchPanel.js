import React from 'react';
import { CountrySearch } from '../../features/CountrySearch/CountrySearch';
import { RegionFilter } from '../../features/RegionFilter/RegionFilter';
import "./styles/SearchPanel.scss";
const SearchPanel = ({changeSearchRequest, cardPageStatus}) => {
  return (
    <section className='search-panel'>
            <CountrySearch changeSearchRequest={changeSearchRequest}/>
            <RegionFilter changeSearchRequest={changeSearchRequest}/>
    </section>
  )
}

export default SearchPanel