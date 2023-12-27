const express = require('express')
const mangoos = require("mongoose")
const dotenv=require('dotenv')
dotenv.config()
const app = express()
const port = 3000|process.env.PORT
const location_router=require("./VotingLocation/VotingLocationRouter")
const area_list_router=require("./AreaList/AreListRouter")
const information_router=require("./information/informationRouter")
const union_router=require("./List/ListRouter")

const parser=require('body-parser')

console.log(process.env.MONGODB_URL,process.env.PORT)
mangoos.connect(process.env.MONGODB_URL).then(()=>console.log("ok")).catch((err)=>console.log(err))
app.get('/', (req, res) => {
//   const all_location=location_model.find()
  res.send('Hello World-4!')
})
app.get("/sex",(req,res)=>{res.send("bohut tej")})
app.use("/api/location",location_router)
app.use("/api/arealist",area_list_router)
app.use("/api/list",union_router)
app.use("/api/info",information_router)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})