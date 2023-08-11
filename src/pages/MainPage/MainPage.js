import React from 'react';
import { Header } from '../../widgets/Header/Header';
import SearchPanel from '../../widgets/SearchPanel/SearchPanel';
import SearchResults from '../../widgets/SearchResults/SearchResults';

function MainPage(props) {
  const data = require("/public/data.json");
  const [searchRequest, setSearchRequest] = React.useState(data)
  function changeSearchRequest(value){
    setSearchRequest(data.filter(item=>item.name.toLowerCase().includes(value.toLowerCase())))
  }
    return(
      <div className='main-page'>
          <header>
              <Header 
                  changeMode={props.changeMode}
                  darkMode={props.darkMode}
              />
          </header>
          <main>
              <SearchPanel changeSearchRequest={changeSearchRequest}/>
              <SearchResults searchRequest={searchRequest}/>
          </main>
      </div>
  )
}

export default MainPage;