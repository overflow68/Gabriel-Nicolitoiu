import React, {useState,useContext} from 'react'


const ToggleModeContext = React.createContext();

export function useToggle(){
    return useContext(ToggleModeContext)
}

export function ToggleProvider({children}){
    const [darkMode, setMode]=useState(true)

    const returnClass = (currentClass) =>{
      let className = "";
      (darkMode === true? className = currentClass : className = currentClass + " light-itm") 

      return className
    }

    const returnBgClass = (currentClass) =>{
      let className = "";
      (darkMode === true? className = currentClass : className = currentClass + " light-mode") 

      return className
    }

    const toggleMode =()=>{
        setMode(!darkMode)
    }


    const value ={
      toggleMode,
      darkMode,
      returnClass,
      returnBgClass
    }
    return (
        <ToggleModeContext.Provider value={value}>
          {children}
        </ToggleModeContext.Provider>
      )
}