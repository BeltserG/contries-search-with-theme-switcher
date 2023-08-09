import React from 'react';
import { Header } from '../../widgets/Header/Header';
import SearchPanel from '../../widgets/SearchPanel/SearchPanel';
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
            <SearchPanel />
            <SearchResults />
        </main>
    </div>
  )
}

export default MainPage;