import * as React from 'react';

export const ModeContext = React.createContext({
  mode:'',
  toggle: () => {}
});

export const ModeProvider: React.FunctionComponent = ({ children }) => {
  const [mode, setMode] = React.useState('light');

  const toggle = () => {
    setMode((currentMode: string ) => {
      if(currentMode === 'light') return 'dark'
      return 'light'
    })
  }

  return (
    <ModeContext.Provider value={{ mode, toggle }} >
      {children}
    </ModeContext.Provider>
  )
}
