var React    = require("react");
var ReactDOM = require("react-dom");
var SpaceApp = require("./components/SpaceApp");

document.addEventListener("DOMContentLoaded", function(event) {
  ReactDOM.render(<SpaceApp />, document.getElementById("space"));
});
