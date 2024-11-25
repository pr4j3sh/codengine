const fs = require("node:fs");

async function setup() {
  if (!fs.existsSync("./.temp")) {
    fs.mkdirSync("./.temp");
  }
}

module.exports = { setup };
