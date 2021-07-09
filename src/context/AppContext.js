import React from 'react'

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [name, setName] = React.useState('Hung');

  return (
    <AppContext.Provider 
      value={{
        name,
        setName
      }}
    >
      {children}
    </AppContext.Provider>
  )
}