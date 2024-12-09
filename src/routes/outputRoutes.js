const express = require("express");
const {
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
} = require("../controllers/outputController");

const router = express.Router();

router.route("/js").post(javascript);
router.route("/ts").post(typescript);
router.route("/py").post(python);
router.route("/java").post(java);
router.route("/rb").post(ruby);
router.route("/pl").post(perl);
router.route("/rs").post(rust);
router.route("/lua").post(lua);
router.route("/cpp").post(cpp);
router.route("/c").post(c);

module.exports = router;
