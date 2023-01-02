const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index"); // index.html 렌더링 해줄것.
});

module.exports = router;
