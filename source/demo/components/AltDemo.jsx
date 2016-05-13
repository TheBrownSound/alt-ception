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

  render: function() {
    return (
      <div>
        <AltNode style={positions.middle}>
          <h1 style={titleStyle}>
            <i className="material-icons" style={{verticalAlign: "text-bottom"}}>tag_faces</i> Alt Node
          </h1>
          <p style={messageStyle}>
            Hey I'm an alt node!
          </p>
        </AltNode>
      </div>
    );
  }

});

module.exports = AltDemo;
