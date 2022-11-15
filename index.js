const express = require("express");
const consign = require("consign");
const dotenv = require("dotenv");

dotenv.config();

const db = require("./src/config/db");

const app = express();

app.db = db;

consign()
    .include("./src/config/middleware.js")
    .then("./src/model/Formula.js")
    .then("./src/controller/formula.js")
    .then("./src/controller/routes.js")
    .into(app);

app.listen(process.env.PORT, () => {
    console.log("Servidor executando...");
});
