const express = require("express");
const demoRouter = express.Router();

const demos = require("./demos");
const pages = require("./pages");

demoRouter.get("*", (req, res, next) => {
  const path = req.path.substring("/demos/".length);
  const demo = demos.find(d => d.path === path);
  if (demo) {
    res.render("demo", { pages, page: demo });
  } else {
    next();
  }
});

module.exports = demoRouter;
