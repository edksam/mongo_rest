const express = require("express");
const app = express();
const PORT = 3002;

app.use((req, res, next) => {
  console.log("First middleware");
  next();
});
app.use((req, res, next) => {
  console.log("Second middleware  ");
});

app.listen(PORT, () => {
  console.log(`Server up and running on port ${PORT}`);
});
