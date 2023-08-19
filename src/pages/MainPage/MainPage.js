import React from 'react';
import classNames from 'classnames';
import { Header } from '../../widgets/Header/Header';
import SearchPanel from '../../widgets/SearchPanel/SearchPanel';
import SearchResults from '../../widgets/SearchResults/SearchResults';
import { DarkModeContext } from '../../app/context/DarkModeContext';
import "./styles/MainPage.scss";

function MainPage(props) {
  const fullData = require("/public/data.json");
  const [searchCriteriaList, setSearchCriteriaList] = React.useState({name:"", region: ""})
  const [searchRequest, setSearchRequest] = React.useState(fullData)
  const [cardPageStatus, setCardPageStatus] = React.useState(false)
  const {darkMode} = React.useContext(DarkModeContext);
  function changeCardPageStatus (){
      setCardPageStatus(prev=>!prev)
  }

  React.useEffect(()=>{
    setSearchRequest(fullData.filter(item=>{
      let passed = true;
      for(let key in searchCriteriaList) {
        if(searchCriteriaList[key]){
          if(!searchCriteriaList[key] === item[key].toLowerCase().includes(searchCriteriaList[key].toLowerCase())){
            passed = false;
          }
        }else{
          continue;
        }
      }
      return passed;
    }))
  },[searchCriteriaList]);

  function changeSearchRequest(value, criteria){
    setSearchCriteriaList(prev=>{return {...prev, [criteria]: value === "none" ? "" : value}});
  }
  return(
    <div className={classNames("main-page", darkMode ? "main-page-dark" : "")}>
        <header>
            <Header/>
        </header>
        <main className='main-content'>
            {!cardPageStatus && <SearchPanel changeSearchRequest={changeSearchRequest} cardPageStatus={cardPageStatus}/>}
            <SearchResults searchRequest={searchRequest} fullData={fullData} cardPageStatus={cardPageStatus} changeCardPageStatus={changeCardPageStatus}/>
        </main>
    </div>
  )

}

export default MainPage;