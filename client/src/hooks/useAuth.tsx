import { useCallback, useEffect, useState } from 'react';

const STORAGE_NAME = 'userData';

export const useAuth = () => {
  // const [token, setToken] = useState(null);
  // const [userId, setUserId] = useState(null);
  // const [ready, setReady] = useState(false);

  // const login = useCallback((jwtToken, id) => {
  //   setToken(jwtToken);
  //   setUserId(id);

  //   localStorage.setItem(STORAGE_NAME, { token: jwtToken, userId: id });
  // }, []);

  // const logout = useCallback(() => {
  //   setToken(null);
  //   setUserId(null);

  //   localStorage.removeItem(STORAGE_NAME);
  // }, []);

  // useEffect(() => {
  //   const data = JSON.parse(localStorage.getItem(STORAGE_NAME));

  //   if (data && data.token) {
  //     login(data.token, data.userId);
  //   }

  //   setReady(true);
  // }, [login]);

  // return { login, logout, token, userId, ready };
};
