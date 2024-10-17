import { createContext, useContext, useEffect } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

const DarkModeContext = createContext();

function DarkModeProvider({children}){
  const [isDarkMode , setIsDarkMode] = useLocalStorageState(
    //Through this line, it will be determined whether the user has activated dark mode or not, and accordingly the default value will be
    window.matchMedia("prefers-color-scheme: dark").matches
    ,'isDarkMode');

  function toggleDarkMode(){
    setIsDarkMode((isDark)=>!isDark)
  }

  useEffect(function(){
    if(!isDarkMode){
      document.documentElement.classList.add('dark-mode');
      document.documentElement.classList.remove('light-mode');
    }else{
      document.documentElement.classList.add('light-mode');
      document.documentElement.classList.remove('dark-mode');
    }
  })
  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}
function useDarkMode(){
  const context =useContext(DarkModeContext);

  if(context === undefined)
    throw new Error('DarkModeContext was used outside of DarkModeProvider');

  return context;
}

export {DarkModeProvider ,useDarkMode};