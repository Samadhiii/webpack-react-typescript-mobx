import { observable, action, makeObservable } from 'mobx';

class TestStore {
  constructor() {
    // use makeObservable in mobx6.0 to update view
    makeObservable(this);
  }

  @observable num = 1;

  @action addNum = () => {
    this.num += 1;
  }
}

export default TestStore;
