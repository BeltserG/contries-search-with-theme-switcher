import React from 'react';
import { CountrySearch } from '../../features/CountrySearch/CountrySearch';
import { RegionFilter } from '../../features/RegionFilter/RegionFilter';
const SearchPanel = () => {
  return (
    <section>
            <CountrySearch />
            <RegionFilter />
    </section>
  )
}

export default SearchPanel