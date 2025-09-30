const express = require("express");
const app = express();
const helmet = require("helmet");

app.use(helmet.hidePoweredBy()); // Hide the X-Powered-By header

app.use(helmet.frameguard({ action: "DENY" })); // Prevent clickjacking

module.exports = app;
const api = require("./server.js");
app.use(express.static("public"));
app.disable("strict-transport-security");
app.use("/_api", api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + "/views/index.html");
});
let port = process.env.PORT || 5000;
app.listen(port, "0.0.0.0", () => {
  console.log(`Your app is listening on port ${port}`);
});
