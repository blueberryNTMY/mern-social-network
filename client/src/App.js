import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { useRoutes } from './routes';
import { AuthContext } from './context/AuthContext';
import { useAuth } from './hooks/useAuth';

const App = () => {
  const { token, userId, login, logout, ready } = useAuth();
  const isAuthenticate = !!token;
  const routes = useRoutes(isAuthenticate);

  return (
    <AuthContext.Provider value={{ token, userId, login, logout, ready }}>
      {routes}
    </AuthContext.Provider>
  );
};

export default App;
