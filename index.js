const express = require('express')
const app = express()
const port = 3000|process.env.PORT
const location_router=require("./VotingLocation/VotingLocationRouter")
const controller=require('./VotingLocation/VotingLocationController')
const parser=require('body-parser')


app.get("/",controller.getAllLocation)
// app.get('/', (req, res) => {
//   res.send('Hello World-3!')
// })
app.get("/sex",(req,res)=>{res.send("bohut tej")})
app.use("/api/location",location_router)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})