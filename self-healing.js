const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Self-Healing App is Running!");
});

app.get("/crash", (req, res) => {
  process.exit(1);
});

app.listen(3000, () => {
  console.log("App running on port 3000");
});

