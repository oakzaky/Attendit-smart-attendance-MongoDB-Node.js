const path = require('path')
const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const connectDB = require('./config/db')
const app = express()
const http = require('http');
const bodyParser = require("body-parser");
let AppRoutes=require("./Routes")

/*
dotenv.config({path: './config/config.env'})
connectDB()

app.use(express.json())
app.use(cors())
app.use('/users', require('./routes/users'))
app.use('/modules', require('./routes/modules'))
app.use('/sessions', require('./routes/sessions'))

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
*/
app.use(bodyParser.urlencoded({ extended: true }));
dotenv.config({path: './config/config.env'})
connectDB()
app.use(express.json())

app.get("/", (req, res) => {
  res.setHeader("Content-type", "application/json")
  ; res.json({ message: "Welcome to bezkoder application." })
});
const hostname = "localhost";
const port = process.env.PORT;

AppRoutes(app);
http.createServer(app).listen(port, hostname)



