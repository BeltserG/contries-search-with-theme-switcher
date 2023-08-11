import React from 'react';
import { CountrySearch } from '../../features/CountrySearch/CountrySearch';
import { RegionFilter } from '../../features/RegionFilter/RegionFilter';
const SearchPanel = ({changeSearchRequest}) => {
  return (
    <section>
            <CountrySearch changeSearchRequest={changeSearchRequest}/>
            <RegionFilter />
    </section>
  )
}

export default SearchPanel