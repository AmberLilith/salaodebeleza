const express = require('express');
const { engine } = require("express-handlebars");
const connection = require("./database/connection")

const Client = require("./models/Client");

const app = express();

app.use(express.static('public'));

app.use(
    express.urlencoded({
        extended: true
    })
);
app.use(express.json());

app.engine('handlebars', engine({ partialsDir: ['views/partials'] }));
app.set('view engine', 'handlebars');

const clientRouter = require("./routers/clients/clientRouter");

app.use("/clients", clientRouter);

app.get("/home", (req, res) =>{
    res.render("home");
});


connection
    .sync()
    .then(() => {
        app.listen(3000);
    }).catch((err) => console.log(err));

module.exports = app; //For Unit Tests