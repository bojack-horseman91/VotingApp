const router=require('express').Router()
const controller=require('./informationController')
const parser=require('body-parser')

router.post("/make",parser.json(),controller.makeLocation)
router.get('/loc',controller.getLocation)
router.get("/",controller.getAllLocation)



module.exports=router
