import React, {useState,useContext} from 'react'


const ToggleModeContext = React.createContext();

export function useToggle(){
    return useContext(ToggleModeContext)
}

export function ToggleProvider({children}){
    const [darkMode, setMode]=useState(true)

    const toggleMode =()=>{
        setMode(!darkMode)
    }


    const value ={
      toggleMode,
      darkMode
    }
    return (
        <ToggleModeContext.Provider value={value}>
          {children}
        </ToggleModeContext.Provider>
      )
}