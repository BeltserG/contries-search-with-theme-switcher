import React from 'react';
import { Header } from '../../widgets/Header/Header';
import SearchPanel from '../../widgets/SearchPanel/SearchPanel';
import SearchResults from '../../widgets/SearchResults/SearchResults';
import "./styles/MainPage.scss";

function MainPage(props) {
  const fullData = require("/public/data.json");
  const [searchCriteriaList, setSearchCriteriaList] = React.useState({name:"", region: ""})
  const [searchRequest, setSearchRequest] = React.useState(fullData)
  const [cardPageStatus, setCardPageStatus] = React.useState(false)
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
    <div className='main-page'>
        <header>
            <Header 
                changeMode={props.changeMode}
                darkMode={props.darkMode}
            />
        </header>
        <main>
            {!cardPageStatus && <SearchPanel changeSearchRequest={changeSearchRequest} cardPageStatus={cardPageStatus}/>}
            <SearchResults searchRequest={searchRequest} fullData={fullData} cardPageStatus={cardPageStatus} changeCardPageStatus={changeCardPageStatus}/>
        </main>
    </div>
  )

}

export default MainPage;