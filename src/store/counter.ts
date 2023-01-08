import {makeAutoObservable} from "mobx";

class Counter {
  count = 0
  time = 60

  constructor() {
    makeAutoObservable(this)
  }

  increment() {
    this.count = this.count + 1
    console.log(1)
  }

  decrement() {
    console.log(2)
    this.count = this.count - 1
  }

  get total() {
    return `count + time =` + this.count + this.time
  }

}

export default new Counter()