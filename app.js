require('dotenv').config()
const db = require('./connexion/connexion');

const express = require("express");
const app = express();
const router = require('./routes');
const port = 3000;

app.use(express.json());
app.use('/',router);


app.listen(port, () => console.log(`App listening from port ${port}`));
