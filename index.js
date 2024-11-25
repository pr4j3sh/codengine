const {
  errorHandler,
  notFoundHandler,
  logHandler,
  asyncHandler,
  corsHandler,
} = require("exhandlers");
const express = require("express");
const fs = require("node:fs/promises");
const util = require("node:util");
const { setup } = require("./src/utils");
const exec = util.promisify(require("node:child_process").exec);

const port = process.env.PORT;
const hostname = process.env.HOSTNAME;
const origins = process.env.ORIGINS;
const dir = process.env.DIR;

setup();

const server = express();

server.use(express.json());
server.use(corsHandler(origins));
server.use(logHandler());

server.get(
  "/api/check",
  asyncHandler(async (req, res) => {
    res.status(200).json({
      success: true,
      message: "server online",
    });
  }),
);

server.post(
  "/api/output/js",
  asyncHandler(async (req, res) => {
    const { code } = req.body;

    await fs.writeFile(`${dir}.js`, code);
    const { stdout, stderr } = await exec(`node ${dir}.js`);
    if (stderr) {
      throw new Error(JSON.stringify(stderr));
    }
    res.status(200).json({
      success: true,
      message: "server online",
      code,
      output: JSON.stringify(stdout),
    });
  }),
);

server.use(notFoundHandler);
server.use(errorHandler);

server.listen(port, hostname, () => {
  console.log(`server running @ http://${hostname}:${port}`);
});
