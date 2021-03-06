const express = require('express');
const app = express();
const port = 9090;
const router = require("./routers/index");
const db = require("./models/index");
const { cors } = require("./config/cors");



(async () => {
    db.sequelize.sync();
}) ();

app.use(cors);

app.use(express.json());

app.use("/api", router);



app.listen(port, () => {
    console.log(`Le serveur ecoute à http://localhost:${port}`); //9090
});