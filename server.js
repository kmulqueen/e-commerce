const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Home Page");
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server is up and running on port: ${port}`);
});
