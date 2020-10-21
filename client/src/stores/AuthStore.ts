import { observable, action } from 'mobx';
import RootStore from './RootStore';

const STORAGE_NAME = 'userData';

export interface IAuthStore {
  token: string;
  userId: string;
  isReady: boolean;
}

class AuthStore implements IAuthStore {
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @observable token = '';
  @observable userId = '';
  @observable isReady = true;

  @action login(jwtToken: string, userId: string) {
    this.isReady = false;

    this.token = jwtToken;
    this.userId = userId;

    localStorage.setItem(STORAGE_NAME, JSON.stringify({
      token: jwtToken,
      userId
    }));

    this.isReady = true;
  }

  @action logout() {
    this.isReady = false;

    localStorage.removeItem(STORAGE_NAME);

    this.isReady = true;
  }
}

export default AuthStore;
