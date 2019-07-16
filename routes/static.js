const express = require("express");
const router = express.Router();

const pages = require("./pages");

router.get("*", (req, res, next) => {
  const path = req.path.substring(1);
  const page = pages.find(p => p.path === path);
  if (page) {
    res.render(path || "home", { page, pages });
  } else {
    next();
  }
});

module.exports = router;
