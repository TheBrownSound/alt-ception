import React    from "react";
import Container from "./Container";

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

  render: function() {
    return (
      <div>
        <Container color="orange" size={60} style={positions.middle} >
          <i className="material-icons" style={{fontSize:50}}>gps_fixed</i>
        </Container>
        <Container color="purple" style={positions.bottom}>
          <h1 style={titleStyle}>
            <i className="material-icons" style={{verticalAlign: "text-bottom"}}>chrome_reader_mode</i> Component
          </h1>
          <p style={messageStyle}>
            Buttons, lists, anything user-facing.
          </p>
        </Container>
        <Container color="red" style={positions.right} >
          <h1 style={titleStyle}>
            <i className="material-icons" style={{verticalAlign: "text-bottom"}}>notifications_active</i> Actions
          </h1>
          <p style={messageStyle}>
            Things you want to happen
          </p>
        </Container>
        <Container color="green" style={positions.left} >
          <h1 style={titleStyle}>
            <i className="material-icons" style={{verticalAlign: "text-bottom"}}>store</i> Store
          </h1>
          <p style={messageStyle}>
            State machine that responds to actions and stores data
          </p>
        </Container>
        <Container color="blue" style={positions.top} >
          <h1 style={titleStyle}>
            <i className="material-icons" style={{verticalAlign: "text-bottom"}}>cloud_done</i> Source
          </h1>
          <p style={messageStyle}>
            Data retrieval. Eg. ajax calls
          </p>
        </Container>
      </div>
    );
  }

});

module.exports = AltDemo;
