require('dotenv').config()

const CONFIG = {
    APP_PORT: process.env.APP_PORT || 3000,
    DB_URI:"mongodb://localhost:27017/myblogapp",
    APP_SECRET: "thisismyblogapp"
}


module.exports = CONFIG