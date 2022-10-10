const bodyParser = require('body-parser')
const express = require('express')

/**
 * @type { (app: import('express').Express) => void }
 */
module.exports = app => {
    app.use(bodyParser.urlencoded({extended: true}))
    app.use(express.static('./src/view'))
    app.use(express.static('./node_modules/katex'))
    app.set("view engine", "ejs")
    app.set('views', './src/view')
}