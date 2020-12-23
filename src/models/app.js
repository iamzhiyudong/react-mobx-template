import {observable, makeObservable} from 'mobx';

class AppStore {
  @observable userInfo = {
    name: 'zyd'
  }

  constructor () {
    makeObservable(this);
  }
}
const appStore = new AppStore();
window.appStore = appStore;

export default appStore;