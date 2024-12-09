const fs = require("node:fs");
const { dir } = require("./consts");

async function setup() {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
}

module.exports = { setup };
