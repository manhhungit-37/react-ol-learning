import { createContext, useState } from "react";

export const AuthenticateContext = createContext();

export const AuthenticateProvider = ({ children }) => {
  const [isAuthenticate, setIsAuthenticate] = useState(false);

  const AuthenticateData = {
    isAuthenticate,
    setIsAuthenticate
  }

  return (
    <AuthenticateContext.Provider value={AuthenticateData}>
      {children}
    </AuthenticateContext.Provider>
  )
}