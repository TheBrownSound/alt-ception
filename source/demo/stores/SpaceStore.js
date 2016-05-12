var Alt = require("../alt");

// Include Actions you care about
// Include Sources you might need
//
const tickSpeed = 100;

class SpaceStore {
  constructor() {
    this.state = {};
    this.bindListeners({});
  }

}

module.exports = Alt.createStore(SpaceStore, "SpaceStore");
