const express = require("express");
const timeSheet = require("./../module/TimeSheet/timesheet.routes");

const app = express();

app.use("/timesheet", timeSheet);

module.exports = app;