const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 8910;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

const appRoute = require("./src/routes/route-employee");
app.use("/", appRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
