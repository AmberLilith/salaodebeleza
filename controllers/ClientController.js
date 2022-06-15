const Client = require("../models/Client");

module.exports = class TaskController {
    static registerClient(req, res){
        res.render("client/register");
    }

    static allClients(req, res){
        res.render("client/all");
    }
}