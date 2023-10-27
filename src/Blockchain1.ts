export class Blockchain1 {
  state: any;

  constructor() {
    this.state = {};
  }

  updateState(key: string, value: any) {
    this.state[key] = value;
  }

  getState() {
    return this.state;
  }
}
