var React     = require("react");
var ShipStore = require("../stores/ShipStore");
var StarField = require("./StarField");

var tick;

var Space = React.createClass({

  getInitialState: function() {
    return {
      ship: ShipStore.getState(),
      position: {
        x: 0,
        y: 0
      }
    }
  },

  componentDidMount: function() {
    ShipStore.listen(this.shipChanged);
    //tick = setInterval(this.update);
  },

  componentWillUnmount: function() {
    ShipStore.unlisten(this.shipChanged);
    //clearInterval(tick);
  },

  shipChanged: function(state) {
    this.setState({ship:state});
  },

  getAxisSpeed: function(angle, speed) {
    return {
      x: Math.sin(angle*Math.PI/180)*speed,
      y: Math.cos(angle*Math.PI/180)*speed
    }
  },

  update: function() {
    var axisSpeed = this.getAxisSpeed(this.state.ship.rotation, this.state.ship.throttle * 0.01);
    this.setState({
      position: {
        x: this.state.position.x + axisSpeed.x,
        y: this.state.position.y + axisSpeed.y
      }
    });
  },

  render: function() {
    return (
      <div>
        <StarField offset={this.state.position} size={1} />
        <StarField offset={this.state.position} size={2} />
      </div>
    );
  }

});

module.exports = Space;
