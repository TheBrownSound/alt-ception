import React from "react";
import Color from "color";

let AltNode = React.createClass({

  propTypes: {
    active: React.PropTypes.bool,
    color: React.PropTypes.string,
    message: React.PropTypes.string,
    size: React.PropTypes.number,
    style: React.PropTypes.object
  },

  getDefaultProps: function() {
    return {
      active: false,
      color: "#bada55",
      size: 200
    }
  },

  render: function() {
    let containerStyle = {
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: this.props.color,
      border: this.props.size * 0.1 + "px solid" + Color(this.props.color).darken(0.5).hexString(),
      borderRadius: "50%",
      boxShadow: (!this.props.active) ? "none":"0px 0px 30px 0px " + Color(this.props.color).lighten(0.5).hexString(),
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

    let messageStyle = {
      backgroundColor: "rgba(0,0,0,0.8)",
      borderRadius: 4,
      display: (this.props.message) ? "block":"none",
      marginTop: (this.props.message) ? 15:0,
      opacity: (this.props.message) ? 1:0,
      padding: "10px 15px",
      position: "absolute",
      left: "50%",
      transition: "all 1000ms ease-out",
      transform: "translateX(-50%)"
    }

    return (
      <div className="container" style={Object.assign(containerStyle, this.props.style)}>
        {this.props.children}
        <span style={messageStyle}>{this.props.message}</span>
      </div>
    );
  }

});

module.exports = AltNode;
