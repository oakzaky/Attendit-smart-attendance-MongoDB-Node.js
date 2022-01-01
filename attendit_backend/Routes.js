const express = require('express')
const router = express.Router();
const Obj = require('./controllers/users')


module.exports = (app) => {
    const user = require('./routes/users');
    const modules = require('./routes/modules');
    const sessions = require('./routes/sessions');
    const attendance = require('./routes/Attendance');
    app.use("/attendance",attendance)
    app.use("/user",user)
    app.use("/modules",modules)
    app.use("/sessions",sessions)
}