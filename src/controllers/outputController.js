const { asyncHandler } = require("exhandlers");
const fs = require("node:fs/promises");
const util = require("node:util");
const exec = util.promisify(require("node:child_process").exec);
const { dir, file } = require("../lib/consts");

const javascript = asyncHandler(async (req, res) => {
  const { code } = req.body;

  await fs.writeFile(`${dir}${file}.js`, code);
  const { stdout, stderr } = await exec(`node ${dir}${file}.js`);
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

  await fs.writeFile(`${dir}${file}.py`, code);
  const { stdout, stderr } = await exec(`python3 ${dir}${file}.py`);
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

  await fs.writeFile(`${dir}${file}.cpp`, code);
  const { stdout, stderr } = await exec(
    `g++ -o ${dir}${file} ${dir}${file}.cpp && ${dir}${file}`,
  );
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

  await fs.writeFile(`${dir}${file}.c`, code);
  const { stdout, stderr } = await exec(
    `cc -o ${dir}${file} ${dir}${file}.c && ${dir}${file}`,
  );
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

  await fs.writeFile(`${dir}${file}.rb`, code);
  const { stdout, stderr } = await exec(`ruby ${dir}${file}.rb`);
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

  await fs.writeFile(`${dir}${file}.pl`, code);
  const { stdout, stderr } = await exec(`perl ${dir}${file}.pl`);
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

  await fs.writeFile(`${dir}${file}.rs`, code);
  const { stdout, stderr } = await exec(
    `rustc -o ${dir}${file} ${dir}${file}.rs && ${dir}${file}`,
  );
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

  await fs.writeFile(`${dir}${file}.java`, code);
  const { stdout, stderr } = await exec(
    `javac -d ${dir} ${dir}${file}.java && java -cp  ${dir} ${file}`,
  );
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

  await fs.writeFile(`${dir}${file}.lua`, code);
  const { stdout, stderr } = await exec(`lua ${dir}${file}.lua`);
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

  await fs.writeFile(`${dir}${file}.ts`, code);
  const { stdout, stderr } = await exec(
    `tsc --outDir ${dir} ${dir}${file}.ts && node ${dir}${file}.js`,
  );
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
