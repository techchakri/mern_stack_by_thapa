const express = require("express");
const app = express();
const router = require("./router/auth-router");
const connectDb = require("./utils/db");

const port = 5000;

app.use(express.json());

// Mount the Router: To use the router in your main Express app, you can "mount" it at a specific URL Prefix
app.use("/api/auth",router);


app.listen(port, () => {
    connectDb();
    console.log(`server is running on port ${port}`)
})
