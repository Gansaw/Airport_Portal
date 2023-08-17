// Authorization.js
import { createContext, useContext, useState } from 'react';

const Authorization = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    // 로그인 로직
    setIsLoggedIn(true);
  };

  const logout = () => {
    // 로그아웃 로직
    setIsLoggedIn(false);
  };

  return (
    <Authorization.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </Authorization.Provider>
  );
};

export const useAuth = () => useContext(Authorization);
