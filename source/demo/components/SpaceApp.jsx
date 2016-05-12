var React    = require("react");
var Space    = require("./Space");
var Ship     = require("./Ship");
var Controls = require("./ShipControls");

var SpaceApp = React.createClass({

  render: function() {
    return (
      <div>
        <Controls />
        <Space />
        <Ship />
      </div>
    );
  }

});

module.exports = SpaceApp;
