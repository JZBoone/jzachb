const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const logger = require("morgan");
const pages = require("./routes/pages");

const demoRouter = require("./routes/demoRouter");
const pageRouter = require("./routes/pageRouter");
const sendMessageRouter = require("./routes/sendMessageRouter");

const app = express();

const isDev = process.env.NODE_ENV === "dev";

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.set("view cache", !isDev);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

if (isDev) {
  const webpackMiddleware = require("webpack-dev-middleware");
  const webpack = require("webpack");
  const webpackConfig = require("./webpack.config");
  webpackConfig.mode = "development";
  app.use(
    webpackMiddleware(webpack(webpackConfig), {
      publicPath: "/js"
    })
  );
}

app.use(express.static(path.join(__dirname, "public")));

app.post("/send-message", sendMessageRouter);
app.get("/demos/*", demoRouter);
app.all("*", pageRouter);

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
