const express = require("express");
const router = express.Router();
const HomeController = require("../http/controller/HomeController");
const Auth = require("../http/middleware/Auth"); 


//MyHome API 
router.get("/api/home/",HomeController.homeList);
router.post("/api/home",HomeController.myNewHome);
router.put("/api/home/:id",HomeController.editHome);
router.delete("/api/removehome/:id",HomeController.deleteHome);


module.exports = router;