const express = require("express");
const app = express();

app.get("/endpoint1", (req, res) => {
  res.send("This is Endpoint1 Response");
});

app.get("/endpoint2", (req, res) => {
  for (let i = 0; i < 9999999999999999999; i++) {
    console.log(i);
  }
  res.send("This is Endpoint2 Response");
});

app.listen(3000, () => {
  console.log("Server is Running");
});
