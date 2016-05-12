var React    = require("react");

var ShipThruster = React.createClass({

  getDefaultProps: function() {
    return {
      size: 1,
      offset: {
        x: 0,
        y: 0
      }
    };
  },

  render: function() {
    return (
      <div className="space__starfield" style={{
        backgroundImage: "url('assets/starfield_" + this.props.size + ".png')",
        backgroundRepeat: "repeat",
        display: "block"
      }} />
    );
  }

});

module.exports = ShipThruster;
