const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
require("dotenv").config();
const connection = require("./db/db");

// Router
const userRoute = require("./routes/user");

// Database
connection();

app.use(express.json());
app.use("/api/users", userRoute);

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
