const express = require("express");
const router = express.Router();
const multer = require("multer");
const ImgController = require("../http/controller/ImgController");
const Auth = require("../http/middleware/Auth"); 


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now()+"-"+file.originalname)
    }
  })
   
  var upload = multer({ storage: storage })

  //Images API

router.get("/api/imgs" ,ImgController.imgList);
router.get("/api/imgs/:id" ,ImgController.getImgById);
router.post("/api/imgs",upload.single('img'),Auth,ImgController.uploadImg);


module.exports = router;