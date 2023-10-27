import { Blockchain1 } from './Blockchain1';

export class Blockchain2 {
  blockchain1: Blockchain1;
  state: any;

  constructor(blockchain1: Blockchain1) {
    this.blockchain1 = blockchain1;
    this.state = {};
  }

  updateState(key: string, value: any) {
    this.state[key] = value;
    this.blockchain1.updateState(key, value);
  }

  getState() {
    return this.state;
  }
}
