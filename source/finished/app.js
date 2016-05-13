var React    = require("react");
var ReactDOM = require("react-dom");
var AltDemo = require("./components/AltDemo");

document.addEventListener("DOMContentLoaded", function(event) {
  ReactDOM.render(<AltDemo />, document.getElementById("altdemo"));
});
