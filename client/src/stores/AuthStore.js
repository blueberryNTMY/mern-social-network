import { observable, action, decorate } from "mobx";

const STORAGE_NAME = "userData";

class AuthStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @observable token = null;
  @observable userId = null;
  @observable isReady = true;

  @action login(jwtToken, userId) {
    this.isReady = false;

    this.token = jwtToken;
    this.userId = userId;

    localStorage.setItem(STORAGE_NAME, { token: jwtToken, userId });

    this.isReady = true;
  }

  @action logout() {
    this.isReady = false;

    localStorage.removeItem(STORAGE_NAME);

    this.isReady = true;
  }
}

export default AuthStore;
