const express = require('express')
const consign = require('consign')
const dotenv = require('dotenv')
// const db = require('./src/config/db')

dotenv.config()

const app = express()

// app.db = db

consign()
    .include('./src/config/middleware.js')
    .then('./src/controller/routes.views.js')
    .then('./src/controller/routes.js')
    .into(app)


app.listen('4000', () => {
    console.log('Servidor executando...');
})