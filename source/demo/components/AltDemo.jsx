import React             from "react";
import AltNode           from "./AltNode";
import AltMarker         from "./AltMarker";
import AltceptionStore   from "../stores/AltceptionStore";
import AltceptionActions from "../actions/AltceptionActions";

let positions = {
  top:    {left: "50%", top: "20%"},
  bottom: {left: "50%", top: "80%"},
  right:  {left: "80%", top: "50%"},
  left:   {left: "20%", top: "50%"},
  middle: {left: "50%", top: "50%"}
}

let titleStyle = {
  textTransform: "uppercase",
  fontSize: "1.2rem",
  fontWeight: "bold"
}

let messageStyle = {
  fontStyle: "italic",
  fontSize: "0.8rem",
  padding: "5px 10px"
}

let AltDemo = React.createClass({

  getInitialState: function() {
    return AltceptionStore.getState();
  },

  componentDidMount: function() {
    AltceptionStore.listen(this.altChanged);
  },

  componentWillUnmount: function() {
    AltceptionStore.unlisten(this.altChanged);
  },

  altChanged: function(state) {
    this.setState(state);
  },

  getMarkerPosition: function(location) {
    let offset = {
      marginTop: 100
    }
    switch (location) {
      case "component":
        return Object.assign(offset, positions.bottom);
      case "actions":
        return Object.assign(offset, positions.right);
      case "store":
        return Object.assign(offset, positions.left);
      case "source":
        return Object.assign(offset, positions.top);
      default:
        return positions.middle;
    }
  },

  setLocalProperty: function() {
    AltceptionActions.setAValue(false);
  },

  fetchExternalData: function() {
    AltceptionActions.setAValue(true);
  },

  getOptionAction: function(option) {
    console.log('getting option for:', option);
    switch (option) {
      case "action":
        return {
          action: AltceptionActions.doAction,
          icon: "mouse",
          text: "Emit Action"
        };
      case "relay":
        return {
          action: AltceptionActions.relayAction,
          icon: "replay",
          text: "Relay Action"
        };
      case "set":
        return {
          action: this.setLocalProperty,
          icon: "archive",
          text: "Set Data"
        };
      case "fetch":
        return {
          action: this.fetchExternalData,
          icon: "cloud_upload",
          text: "Fetch Data"
        };
      case "data":
        return {
          action: AltceptionActions.returnData,
          icon: "cloud_download",
          text: "Return Data"
        };
      case "error":
        return {
          action: AltceptionActions.returnError,
          icon: "error",
          text: "Report Error"
        };
    }
  },

  getActionButtons: function() {
    var self = this;
    return this.state.options.map(function(option) {
      let optionAction = self.getOptionAction(option);
      return (
        <button onClick={optionAction.action}>
          <i className="material-icons" style={{verticalAlign: "text-bottom"}}>{optionAction.icon}</i> {optionAction.text}
        </button>
      );
    });
  },

  render: function() {
    return (
      <div>
        <AltNode
          active={this.state.location == "component"}
          color="purple"
          style={positions.bottom}
        >
          <h1 style={titleStyle}>
            <i className="material-icons" style={{verticalAlign: "text-bottom"}}>chrome_reader_mode</i> Component
          </h1>
          <p style={messageStyle}>
            Buttons, lists, anything user-facing.
          </p>
        </AltNode>
        <AltNode
          active={this.state.location == "actions"}
          color="red"
          style={positions.right}
        >
          <h1 style={titleStyle}>
            <i className="material-icons" style={{verticalAlign: "text-bottom"}}>notifications_active</i> Actions
          </h1>
          <p style={messageStyle}>
            Things you want to happen
          </p>
        </AltNode>
        <AltNode
          active={this.state.location == "store"}
          color="green"
          style={positions.left}
        >
          <h1 style={titleStyle}>
            <i className="material-icons" style={{verticalAlign: "text-bottom"}}>store</i> Store
          </h1>
          <p style={messageStyle}>
            State machine that responds to actions and stores data
          </p>
        </AltNode>
        <AltNode
          active={this.state.location == "source"}
          color="blue"
          style={positions.top}
        >
          <h1 style={titleStyle}>
            <i className="material-icons" style={{verticalAlign: "text-bottom"}}>cloud_done</i> Source
          </h1>
          <p style={messageStyle}>
            Data retrieval. Eg. ajax calls
          </p>
        </AltNode>
        <AltMarker style={this.getMarkerPosition(this.state.location)}>
          {this.getActionButtons()}
        </AltMarker>
      </div>
    );
  }

});

module.exports = AltDemo;
