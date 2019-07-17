const express = require("express");
const pageRouter = express.Router();

const pages = require("./pages");
const demos = require("./demos");

pageRouter.get("*", (req, res, next) => {
  const { path } = req;
  const page = pages.find(p => p.path === path);
  if (page) {
    const locals = { page, pages };
    if (path === "/demos") {
      locals.demos = demos;
    }
    res.render(page.template, locals);
  } else {
    next();
  }
});

module.exports = pageRouter;
