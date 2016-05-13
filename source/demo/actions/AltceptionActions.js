import Alt from "../alt";

// Actions are centralized places to store events:
// - Relay requests from all over the app
// - They act as the gatekeeper to the stores
// - Actions should be relatively simple, usualy just a string

class AltceptionActions {
  constructor() {
    // Actions go here!
    this.generateActions(
      "start",
      "doAction",
      "relayAction",
      "setAValue",
      "getSomeData",
      "returnData",
      "returnError"
    );
  }

  // Or here!
}

module.exports = Alt.createActions(AltceptionActions);
