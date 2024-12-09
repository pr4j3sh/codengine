const { asyncHandler } = require("exhandlers");
const fs = require("node:fs/promises");
const util = require("node:util");
const exec = util.promisify(require("node:child_process").exec);
const { dir } = require("../lib/consts");

const javascript = asyncHandler(async (req, res) => {
  const { code } = req.body;

  await fs.writeFile(`${dir}.js`, code);
  const { stdout, stderr } = await exec(`node ${dir}.js`);
  if (stderr) {
    throw new Error(JSON.stringify(stderr));
  }
  res.status(200).json({
    success: true,
    message: "code compiled and executed successfully",
    output: JSON.stringify(stdout),
  });
});

const python = asyncHandler(async (req, res) => {
  const { code } = req.body;

  await fs.writeFile(`${dir}.py`, code);
  const { stdout, stderr } = await exec(`python3 ${dir}.py`);
  if (stderr) {
    throw new Error(JSON.stringify(stderr));
  }
  res.status(200).json({
    success: true,
    message: "code compiled and executed successfully",
    output: JSON.stringify(stdout),
  });
});

const cpp = asyncHandler(async (req, res) => {
  const { code } = req.body;

  await fs.writeFile(`${dir}.cpp`, code);
  const { stdout, stderr } = await exec(`g++ -o ${dir} ${dir}.cpp && ${dir}`);
  if (stderr) {
    throw new Error(JSON.stringify(stderr));
  }
  res.status(200).json({
    success: true,
    message: "code compiled and executed successfully",
    output: JSON.stringify(stdout),
  });
});

const c = asyncHandler(async (req, res) => {
  const { code } = req.body;

  await fs.writeFile(`${dir}.c`, code);
  const { stdout, stderr } = await exec(`cc -o ${dir} ${dir}.c && ${dir}`);
  if (stderr) {
    throw new Error(JSON.stringify(stderr));
  }
  res.status(200).json({
    success: true,
    message: "code compiled and executed successfully",
    output: JSON.stringify(stdout),
  });
});

const ruby = asyncHandler(async (req, res) => {
  const { code } = req.body;

  await fs.writeFile(`${dir}.rb`, code);
  const { stdout, stderr } = await exec(`ruby ${dir}.rb`);
  if (stderr) {
    throw new Error(JSON.stringify(stderr));
  }
  res.status(200).json({
    success: true,
    message: "code compiled and executed successfully",
    output: JSON.stringify(stdout),
  });
});

const perl = asyncHandler(async (req, res) => {
  const { code } = req.body;

  await fs.writeFile(`${dir}.pl`, code);
  const { stdout, stderr } = await exec(`perl ${dir}.pl`);
  if (stderr) {
    throw new Error(JSON.stringify(stderr));
  }
  res.status(200).json({
    success: true,
    message: "code compiled and executed successfully",
    output: JSON.stringify(stdout),
  });
});

const rust = asyncHandler(async (req, res) => {
  const { code } = req.body;

  await fs.writeFile(`${dir}.rs`, code);
  const { stdout, stderr } = await exec(`rustc ${dir}.rs && ${dir}`);
  if (stderr) {
    throw new Error(JSON.stringify(stderr));
  }
  res.status(200).json({
    success: true,
    message: "code compiled and executed successfully",
    output: JSON.stringify(stdout),
  });
});

const java = asyncHandler(async (req, res) => {
  const { code } = req.body;

  await fs.writeFile(`${dir}.java`, code);
  const { stdout, stderr } = await exec(`javac ${dir}.java && java ${dir}`);
  if (stderr) {
    throw new Error(JSON.stringify(stderr));
  }
  res.status(200).json({
    success: true,
    message: "code compiled and executed successfully",
    output: JSON.stringify(stdout),
  });
});

const lua = asyncHandler(async (req, res) => {
  const { code } = req.body;

  await fs.writeFile(`${dir}.lua`, code);
  const { stdout, stderr } = await exec(`lua ${dir}.lua`);
  if (stderr) {
    throw new Error(JSON.stringify(stderr));
  }
  res.status(200).json({
    success: true,
    message: "code compiled and executed successfully",
    output: JSON.stringify(stdout),
  });
});

const typescript = asyncHandler(async (req, res) => {
  const { code } = req.body;

  await fs.writeFile(`${dir}.ts`, code);
  const { stdout, stderr } = await exec(`tsc ${dir}.ts && node ${dir}.js`);
  if (stderr) {
    throw new Error(JSON.stringify(stderr));
  }
  res.status(200).json({
    success: true,
    message: "code compiled and executed successfully",
    output: JSON.stringify(stdout),
  });
});

module.exports = {
  javascript,
  typescript,
  python,
  java,
  ruby,
  perl,
  rust,
  lua,
  cpp,
  c,
};
