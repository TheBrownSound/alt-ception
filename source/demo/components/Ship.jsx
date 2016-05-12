var React     = require("react");
var ShipStore = require("../stores/ShipStore");
var Hull      = require("./ShipBody");
var Thruster  = require("./ShipThruster");

var Ship = React.createClass({

  getInitialState: function() {
    return ShipStore.getState();
  },

  componentDidMount: function() {
    ShipStore.listen(this.shipChanged);
  },

  componentWillUnmount: function() {
    ShipStore.unlisten(this.shipChanged);
  },

  shipChanged: function(state) {
    this.setState(state);
  },

  render: function() {
    return (
      <div className="ship" style={{
        transformOrigin: "50%",
        transform: "translateX(-50%) translateY(-50%) rotateZ(" + this.state.rotation + "deg)"
      }}>
        <Hull />
        <Thruster throttle={this.state.throttle / 100} />
      </div>
    );
  }

});

module.exports = Ship;
