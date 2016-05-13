import Alt               from "../alt";
import AltceptionSource  from "../sources/AltceptionSource";
import AltceptionActions from "../actions/AltceptionActions";

// Stores are state machines:
// - They handle the heavy logic
// - Keep track of state
// - Request data from sources if needed
// - Do stuff with actions!

class AltceptionStore {
  constructor() {
    // State variables

    // event listeners go here
  }

  // Handlers and private methods
};

module.exports = Alt.createStore(AltceptionStore, "AltceptionStore");
