var Alt = require("../alt");
// Include Actions you care about
var ShipActions = require("../actions/ShipActions");
// Include Sources you might need

class ShipStore {
  constructor() {
    // State values of the store
    this.state = {
      throttle: 50,
      rotation: 0
    };
    // Actions you want to subscribe to
    this.bindListeners({
      handleThrottleIncrease : ShipActions.increaseThrottle,
      handleThrottleDecrease : ShipActions.decreaseThrottle,
      handleTurnLeft         : ShipActions.turnLeft,
      handleTurnRight        : ShipActions.turnRight
    });
  }

  handleThrottleIncrease() {
    var throttle = this.state.throttle + 10;
    if (throttle > 100) {
      throttle = 100;
    }
    this.setState({throttle: throttle});
  }

  handleThrottleDecrease() {
    var throttle = this.state.throttle - 10;
    if (throttle < 0) {
      throttle = 0;
    }
    this.setState({throttle: throttle});
  }

  handleTurnLeft() {
    this.setState({rotation: this.state.rotation - 45});
  }

  handleTurnRight() {
    this.setState({rotation: this.state.rotation + 45});
  }
}

module.exports = Alt.createStore(ShipStore, "ShipStore");
