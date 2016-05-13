import React           from "react";
import AltNode         from "./AltNode";
import AltceptionStore from "../stores/AltceptionStore"

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

  render: function() {
    return (
      <div>
        <AltNode color="orange" size={60} style={positions.middle}>
          <i className="material-icons" style={{fontSize:50}}>gps_fixed</i>
        </AltNode>
        <AltNode color="purple" style={positions.bottom}>
          <h1 style={titleStyle}>
            <i className="material-icons" style={{verticalAlign: "text-bottom"}}>chrome_reader_mode</i> Component
          </h1>
          <p style={messageStyle}>
            Buttons, lists, anything user-facing.
          </p>
        </AltNode>
        <AltNode color="red" style={positions.right} >
          <h1 style={titleStyle}>
            <i className="material-icons" style={{verticalAlign: "text-bottom"}}>notifications_active</i> Actions
          </h1>
          <p style={messageStyle}>
            Things you want to happen
          </p>
        </AltNode>
        <AltNode color="green" style={positions.left} >
          <h1 style={titleStyle}>
            <i className="material-icons" style={{verticalAlign: "text-bottom"}}>store</i> Store
          </h1>
          <p style={messageStyle}>
            State machine that responds to actions and stores data
          </p>
        </AltNode>
        <AltNode color="blue" style={positions.top} >
          <h1 style={titleStyle}>
            <i className="material-icons" style={{verticalAlign: "text-bottom"}}>cloud_done</i> Source
          </h1>
          <p style={messageStyle}>
            Data retrieval. Eg. ajax calls
          </p>
        </AltNode>
      </div>
    );
  }

});

module.exports = AltDemo;
