"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_errors_1 = __importDefault(require("http-errors"));
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
// var path = require('path');
// var cookieParser = require('cookie-parser');
const { graphqlHTTP } = require('express-graphql');
const graphql_1 = require("graphql");
// GraphQL schema
const schema = (0, graphql_1.buildSchema)(`
    type Query {
        message: String
    }
`);
// Root resolver
const root = {
    message: () => 'Hello World!'
};
var app = (0, express_1.default)();
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));
app.get("/", (req, res) => {
    console.log(req);
    res.json({ ok1: true });
});
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next((0, http_errors_1.default)(404));
});
// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.render("error");
});
module.exports = app;
