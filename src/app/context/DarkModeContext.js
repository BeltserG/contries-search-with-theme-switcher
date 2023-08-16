import React from 'react'
const DarkModeContext = React.createContext();

const DarkModeContextProvider = (props) => {
    const [darkMode, setDarkMode] = React.useState(false);
    const toggleDarkMode = ()=>{
        setDarkMode(darkMode=>!darkMode);
    }
    return (
<>
    <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
        {props.children}
    </DarkModeContext.Provider>
</>
    )
}

export  {DarkModeContext, DarkModeContextProvider}