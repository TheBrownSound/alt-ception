var React    = require("react");

var ShipBody = React.createClass({

  render: function() {
    return (
      <div className="ship__hull" style={{
        backgroundImage: "url('assets/ship.png')",
        backgroundRepeat: "no-repeat",
        display: "block",
        width: 336,
        height: 447
      }} />
    );
  }

});

module.exports = ShipBody;
