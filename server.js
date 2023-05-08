
const express = require("express");
const app = express();


const Port = 5000 || process.env.Port;
app.listen(Port, (err) => {
  if (err) throw err;
  console.log("server is running");
});