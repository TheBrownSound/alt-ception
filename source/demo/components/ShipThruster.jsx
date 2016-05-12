var React    = require("react");

var ShipThruster = React.createClass({

  render: function() {
    return (
      <div className="ship__thruster" style={{
        backgroundImage: "url('assets/thruster.png')",
        backgroundRepeat: "no-repeat",
        display: "block",
        width: 122,
        height: 131,
        transform: "scaleY(" + this.props.throttle * 2 + ")"
      }} />
    );
  }

});

module.exports = ShipThruster;
