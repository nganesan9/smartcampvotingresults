/*eslint-env node*/
var express = require("express");
var cfenv = require("cfenv");
var app = express();

app.use(express.static(__dirname + "/public"));
// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();
app.listen(appEnv.port, "0.0.0.0", function() {
  console.log("server starting on " + appEnv.url);
});
