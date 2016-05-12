var Alt = require("../alt");

class ShipActions {
  constructor() {
    // Helper for simple actions
    // eg: "actionOne", "actionTwo"
    this.generateActions(
      "increaseThrottle",
      "decreaseThrottle",
      "turnLeft",
      "turnRight"
    );
  }
}

module.exports = Alt.createActions(ShipActions);
