const {
  errorHandler,
  notFoundHandler,
  logHandler,
  corsHandler,
} = require("exhandlers");
const express = require("express");
const { setup } = require("./src/lib/utils");

const port = process.env.PORT;
const hostname = process.env.HOSTNAME;
const origins = process.env.ORIGINS;

setup();

const server = express();

server.use(express.json());
server.use(corsHandler(origins));
server.use(logHandler());

server.use("/api/check", require("./src/routes/healthRoutes"));
server.use("/api/output", require("./src/routes/outputRoutes"));

server.use(notFoundHandler);
server.use(errorHandler);

server.listen(port, hostname, () => {
  console.log(`server running @ http://${hostname}:${port}`);
});
