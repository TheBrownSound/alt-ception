import React from "react";
import Color from "color";

var Container = React.createClass({

  propTypes: {
    active: React.PropTypes.bool,
    color: React.PropTypes.string,
    message: React.PropTypes.string,
    title: React.PropTypes.string,
    size: React.PropTypes.number,
    style: React.PropTypes.object
  },

  getDefaultProps: function() {
    return {
      active: false,
      color: "#bada55",
      message: "rawr",
      title: "Container!",
      size: 200
    }
  },

  render: function() {
    var containerStyle = {
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: this.props.color,
      border: this.props.size * 0.1 + "px solid" + Color(this.props.color).darken(0.5).hexString(),
      borderRadius: "50%",
      color: "white",
      display: "flex",
      flexDirection: "column",
      fontSize: "66.5%",
      fontFamily: "sans-serif",
      textAlign: "center",
      transition: "all 1000ms ease-out",
      transform: "translate(-50%, -50%)",
      position: "absolute",
      width: this.props.size,
      height: this.props.size
    }

    return (
      <div className="container" style={Object.assign(containerStyle, this.props.style)}>
        {this.props.children}
      </div>
    );
  }

});

module.exports = Container;
