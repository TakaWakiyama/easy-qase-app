var createError = require("http-errors");
import express, { Express, Request, Response } from "express";
// var path = require('path');
// var cookieParser = require('cookie-parser');
var logger = require("morgan");

var app = express();

app.use(logger("dev"));
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());

// app.use('/', indexRouter);

app.get("/", (req: Request, res: Response) => {
  console.log(req);
  res.json({ ok1: true });
});

// catch 404 and forward to error handler
app.use(function (req: any, res: any, next: any) {
  next(createError(404));
});

// error handler
app.use(function (err: any, req: any, res: any, next: any) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
