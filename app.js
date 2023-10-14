const express = require("express");
const mongoose = require("mongoose")
const cookieParser = require('cookie-parser');
const bodyParser = require("body-parser")

 const app = express()


app.use(express.json());

const routesController = require("./routes/auth.routes")




app.use(routesController)
app.set('view engine', 'ejs')


const CONFIG = require("./config/app.config")
mongoose.connect(CONFIG.DB_URI, { 
    useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB successfully");
    app.use(express.static("public"))
    app.use(cookieParser());
    app.use(bodyParser.urlencoded({ extended: true }))
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB:", error);
  });
app.listen(CONFIG.APP_PORT,()=> {
    console.log(`App is running on ${CONFIG.APP_PORT}`)
})