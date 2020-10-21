import  React  from 'react';
import AuthStore from './AuthStore';

interface IProps {
  authStore: AuthStore
}

interface IState {
  authStore: AuthStore
}

class RootStore extends React.Component<{}, {}> {
  constructor() {
    super({})
    this.authStore = new AuthStore(this);
  }
}

export default RootStore;
