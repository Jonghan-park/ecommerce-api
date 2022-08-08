const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
require("dotenv").config();
const connection = require("./db/db");

// Router
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");

// Database
connection();

app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
