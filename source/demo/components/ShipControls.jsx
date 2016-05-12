var React       = require("react");
var ShipActions = require("../actions/ShipActions");

var ShipControls = React.createClass({

  render: function() {
    return (
      <div className="controls">
        <div className="button" onClick={ShipActions.turnLeft} ><i className="material-icons">undo</i></div>
        <div className="button" onClick={ShipActions.decreaseThrottle} ><i className="material-icons">remove</i></div>
        <div className="button" onClick={ShipActions.increaseThrottle} ><i className="material-icons">add</i></div>
        <div className="button" onClick={ShipActions.turnRight} ><i className="material-icons">redo</i></div>
      </div>
    );
  }

});

module.exports = ShipControls;
