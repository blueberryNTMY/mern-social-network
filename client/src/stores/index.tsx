import React, { createContext, useContext } from "react";
import RootStore from "./RootStore";

const rootStore: RootStore = new RootStore();
const RootStoreContext = createContext(rootStore);

const RootStoreProvider = (props: any) => (
  <RootStoreContext.Provider value={rootStore} {...props} />
);

const useRootStore = () => useContext(RootStoreContext);

export { rootStore, RootStoreContext, RootStoreProvider, useRootStore };
