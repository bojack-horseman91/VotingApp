const controler=require("./ListController")
const router=require('express').Router()
const parser=require('body-parser')

router.get("/",controler.getList)
router.post("/make",parser.json(),controler.addUnionOrPourashova)
module.exports=router
