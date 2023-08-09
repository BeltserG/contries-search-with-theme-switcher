import React from 'react';
import { Header } from '../../widgets/header/Header';
import { CountrySearch } from '../../features/CountrySearch/CountrySearch';
import { RegionFilter } from '../../features/RegionFilter/RegionFilter';
import SearchResults from '../../widgets/SearchResults/SearchResults';

function MainPage(props) {
  return (
    <div className='main-page'>
        <header>
            <Header 
                changeMode={props.changeMode}
                darkMode={props.darkMode}
            />
        </header>
        <main>
            <CountrySearch />
            <RegionFilter />
            <SearchResults />
        </main>
    </div>
  )
}

export default MainPage;