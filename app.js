const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const pages = require("./routes/pages");

const staticPageRouter = require("./routes/static");

const app = express();

const isDev = process.env.NODE_ENV === "dev";

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");
app.set("view cache", !isDev);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.all("*", staticPageRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = isDev ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error", {
    pages,
    page: {
      title: "Whoops!"
    }
  });
});

module.exports = app;
