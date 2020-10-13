import React, { createContext, useContext } from "react";
import RootStore from "./RootStore";

const rootStore = new RootStore();
const RootStoreContext = createContext(rootStore);

const RootStoreProvider = (props) => (
  <RootStoreContext.Provider value={rootStore} {...props} />
);

const useRootStore = () => useContext(RootStoreContext);

export { rootStore, RootStoreContext, RootStoreProvider, useRootStore };
