const express=require("express")
const {explainCodeWithGemini}=require("../controllers/aiController")
const router=express.Router()


router.post("/code",explainCodeWithGemini)

module.exports=router