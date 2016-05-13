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
    this.location = "none";
    this.waiting = false;
    this.options = [];

    // event listeners go here
    this.bindListeners({
      handleStart: AltceptionActions.start,
      handleAction: AltceptionActions.doAction,
      handleRelayAction: AltceptionActions.relayAction,
      handleValue: AltceptionActions.setAValue,
      handleNewData: AltceptionActions.returnData,
      handleDataError: AltceptionActions.returnError
    });
  }

  handleStart() {
    this.setState({
      location: "component",
      options: ["action"]
    });
  }

  handleAction() {
    this.setState({
      location: "actions",
      options: ["relay"]
    });
  }

  handleRelayAction() {
    this.setState({
      location: "store",
      options: ["set","fetch"]
    });
  }

  handleValue(needsMoreData) {
    // Often we will recieve actions and require more information before we can accurately set state
    if (needsMoreData) {
      this.setState({
        location: "source",
        options: ["data","error"],
        waiting: true
      });
      AltceptionSource.getExternalData();
    } else {
      this.setState({
        data: "rawr",
        location: "component",
        options: ["action"]
      });
    }
  }

  handleNewData(data) {
    this.setState({
      data: data,
      location: "actions",
      options: ["relay"],
      waiting: false
    });
  }

  handleDataError(error) {
    this.setState({
      data: "Sorry!",
      location: "actions",
      options: ["relay"],
      waiting: false
    });
  }
};

module.exports = Alt.createStore(AltceptionStore, "AltceptionStore");
