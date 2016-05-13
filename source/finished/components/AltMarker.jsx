import React from "react";
import AltNode from "./AltNode.jsx"

let markerStyle = {
  position: "absolute",
  transition: "all 500ms ease-out"
};

let childStyle = {
  position: "absolute",
  transform: "translateY(-50%)"
}

let childPositions = [
  {left: 50},
  {right: 50}
];

let AltMarker = React.createClass({

  propTypes: {
    actions: React.PropTypes.array,
    style: React.PropTypes.object
  },

  getDefaultProps: function() {
    return {
      style: {}
    }
  },

  render: function() {
    let children = React.Children.map(this.props.children, function(child, ind){
      return React.cloneElement(child, {style: Object.assign({}, child.props.style, childStyle, childPositions[ind])});
    }, this);

    return (
      <div style={Object.assign({}, markerStyle, this.props.style)}>
        <AltNode color="orange" size={60}>
          <i className="material-icons" style={{fontSize:50}}>gps_fixed</i>
        </AltNode>
        {children}
      </div>
    );
  }

});

module.exports = AltMarker;
