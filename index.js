const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");




dotenv.config();

mongoose
        .connect(process.env.MONGO_URL)  
        .then(() => console.log('Database connected'))
        .catch((err)=>{
            console.log(err);
        })


app.use(express.json());// middleware=>it is used to body takes the data in json format
app.use("/api/auth",authRoute); 
app.use("/api/users",userRoute); 
app.use("/api/products",productRoute); 
app.use("/api/carts", cartRoute); 
app.use("/api/orders", orderRoute); 





app.listen(process.env.PORT || 5000,() => {

    console.log("port is running ");
})