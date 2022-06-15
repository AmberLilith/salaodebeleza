const express = require("express");
const router = express.Router();
const validate =require("../../validations/clientValidations")

const ClientController = require("../../controllers/ClientController");

const Client = require("../../models/Client")

router.get("/create", ClientController.registerClient);

router.get("/all", ClientController.allClients);

router.post("/register", async (req,res)=>{

    const data = {
        name: req.body.name,
        mainPhone: req.body.mainPhone,
        secondaryPhone: req.body.secondaryPhone
    }

     if(!validate(data)){
        res.status(400).json({message:"Invalid(s) data"})
        return
    }

    await Client.create(data);    

    res.status(201).json({message:"Client successfully created!",data});

});

module.exports = router