const express = require("express");
const app = express();
const helmet = require("helmet");

app.use(helmet.hidePoweredBy()); // Hide the X-Powered-By header

app.use(helmet.frameguard({ action: "DENY" })); // Prevent clickjacking
app.use(helmet.xssFilter()); // Prevent XSS attacks
app.use(helmet.noSniff()); // Prevent MIME type sniffing
app.use(helmet.ieNoOpen()); // Prevent Internet Explorer from opening files in the browser
ninetyDaysInSeconds = 90 * 24 * 60 * 60;
app.use(
  helmet.hsts({
    maxAge: ninetyDaysInSeconds,
    force: true,
  }),
); // Enable HTTP Strict Transport Security (HSTS)
app.use(helmet.dnsPrefetchControl()); // Prevent DNS prefetching
app.use(helmet.noCache()); // Prevent caching
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "trusted-cdn.com"],
    },
  }),
);
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
