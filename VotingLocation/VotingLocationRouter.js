const router=require('express').Router()
const controller=require('./VotingLocationController')
const parser=require('body-parser')

router.post("/make",parser.json(),controller.makeLocation)
router.get('/loc',controller.getLocation)
router.get("/",controller.getAllLocation)
router.post("/update",parser.json(),controller.updateOneLocation)



module.exports=router
