import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { useRoutes } from "../../routes";
import { RootStoreProvider, useRootStore } from "../../stores";
import { observer } from "mobx-react-lite";

const App = () => {
  const authStore = useRootStore();
  const routes = useRoutes(false);

  console.log(authStore);
  return (
    <RootStoreProvider>
      <Router>{routes}</Router>
    </RootStoreProvider>
  );
};

export default observer(App);
