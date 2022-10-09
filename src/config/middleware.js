const bodyParser = require('body-parser')
const express = require('express')

/**
 * @type { (app: import('express').Express) => void }
 */
module.exports = app => {
    app.use(bodyParser.urlencoded({extended: true}))
    app.use(express.static('./src/view'))
    app.set("view engine", "ejs")
    app.set('views', './src/view')
}