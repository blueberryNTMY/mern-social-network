import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { useRoutes } from './routes';
import { AuthContext } from './context/AuthContext';
import { useAuth } from './hooks/useAuth';
import { RootStoreProvider } from './store';

const App = () => {
  const { token, userId, login, logout, ready } = useAuth();
  const isAuthenticate = !!token;
  const routes = useRoutes(isAuthenticate);

  return <RootStoreProvider>{routes}</RootStoreProvider>;
};

export default App;
