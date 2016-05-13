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
    this.data = "Nothing to see here";
    this.location = "component";
    this.waiting = false;

    // event listeners go here
    this.bindListeners({
      handleMove: AltceptionActions.moveToNode,
      handleValue: AltceptionActions.setAValue,
      handleNewData: AltceptionActions.dataRetrieved,
      handleDataError: AltceptionActions.dataError
    });
  }

  handleMove(location) {
    this.setState({location: location});
  }

  handleValue(needsMoreData) {
    // Often we will recieve actions and require more information before we can accurately set state
    if (needsMoreData) {
      this.setState({waiting: true});
      AltceptionSource.getExternalData();
    } else {
      this.setState({
        data: "rawr",
        waiting: true
      });
    }
  }

  handleNewData(data) {
    this.setState({
      data: data,
      waiting: false
    });
  }

  handleDataError(error) {
    this.setState({
      data: "Sorry!",
      waiting: false
    });
  }
};

module.exports = Alt.createStore(AltceptionStore, "AltceptionStore");
