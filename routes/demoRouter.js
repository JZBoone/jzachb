const express = require("express");
const demoRouter = express.Router();

const demos = require("./demos");
const pages = require("./pages");

const run = (req, res, next) => {
  const path = req.path.substring("/demos/run/".length);
  const demo = demos.find(d => d.path === path);
  if (demo) {
    res.render("demo", { pages, page: demo, isDemo: true });
  } else {
    next();
  }
};

const blurbs = (req, res, next) => {
  const path = req.path.substring("/demos/blurbs/".length);
  const demo = demos.find(d => d.path === path);
  if (demo) {
    res.render(demo.path, { pages, page: demo });
  } else {
    next();
  }
};

demoRouter.get("/demos/run/*", run);

demoRouter.get("/demos/blurbs/*", blurbs);

module.exports = demoRouter;
