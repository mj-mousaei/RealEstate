const config = require("config");
const ImgModel = require("../../models/ImgModel");


module.exports = new class ImgController {

    async imgList(req,res){
        const imgs = await ImgModel.find();
        res.send(imgs);
    }

    async getImgById(req,res){
        const img =await ImgModel.findById(req.params.id);
        if (img)
          res.send(img);
        else res.status(404).send("not found");
    }
    
    async uploadImg(req,res){
        let imgs = new ImgModel({
        img : (config.domainName + (req.file.path).slice(8)) 
        });
        imgs = await imgs.save();
        res.send(imgs);
    }

};
    