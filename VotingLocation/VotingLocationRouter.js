const router=require('express').Router()
const controller=require('./VotingLocationController')
const parser=require('body-parser')

router.post("/make",parser.json(),controller.makeLocation)
router.get("/",controller.getAllLocation)


module.exports=router
