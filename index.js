const express = require("express");
const app = express();
const routes = require("./routes");
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Max-Age", "1800");
  res.setHeader("Access-Control-Allow-Headers", "content-type");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "PUT, POST, GET, DELETE, PATCH, OPTIONS"
  );
  console.log("acessou o midle");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  next();
});

// const port = process.env.PORT || port;
// const www = process.env.WWW || './';
// app.use(express.static(www));
// console.log(`serving ${www}`);
app.use(routes);
app.listen(3000, () => console.log("listening on http://localhost:3000"));
