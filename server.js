const express = require("express");
const app = express();
const indexRouter = require("./app/routes/index")
const db = require('./app/config/dbConnection.js')
// const tb_facilities = db.tb_facilities;
var mysql = require('mysql');
const cors = require('cors');


app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(cors());

db.sequelize.sync({ alter: true }).then(() => {
  console.log('Resync with { alter: true }');
});

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res, next) => {
  res.send('App is running and use "/api" to use other routes')
});

//Route Prefixes
app.use("/api/", indexRouter);

// throw 404 if URL not found
app.all("*", function (req, res) {
  res.send("Page not found");
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on  http://localhost:${PORT}.`);
});