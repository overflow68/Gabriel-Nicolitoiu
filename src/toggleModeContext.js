import React, {useState,useContext} from 'react'


const ToggleModeContext = React.createContext();

export function useToggle(){
    return useContext(ToggleModeContext)
}

export function ToggleProvider({children}){
    const [darkMode, setMode]=useState(true)

    const returnClass = (currentClass,lightClass) =>{
      let className = "";
      (darkMode === true? className = currentClass : className = currentClass + " " + lightClass) 

      return className
    }

    const returnClassExtra = (currentClass,darkClass,lightClass) =>{
      let className = "";
      (darkMode === true? className = currentClass + " " + darkClass : className = currentClass + " " + lightClass) 

      return className
    }

    const toggleMode =()=>{
        setMode(!darkMode)
    }


    const value ={
      toggleMode,
      darkMode,
      returnClass,
      returnClassExtra
    }
    return (
        <ToggleModeContext.Provider value={value}>
          {children}
        </ToggleModeContext.Provider>
      )
}