const express = require('express')
const mangoos = require("mongoose")
const app = express()
const port = 3000|process.env.PORT
const location_router=require("./VotingLocation/VotingLocationRouter")
// const controller=require('./VotingLocation/VotingLocationController')
const parser=require('body-parser')
// const mangoos=require("mongoose")
// const Voting_location_schema=mangoos.Schema({
//     location:{type:String},
//     imageURL:{type:String},
//     presiding_officer:{type:String},
//     police_officer:{type:String},
// })

// location_model=mangoos.model("Voting_Location_Schema",Voting_location_schema)
// app.get("/",(req,res)=>{
//     // console.log("ok")
//     // try {
//     //     const all_location=location_model.find()
//     //     res.status(200).json(all_location)
//     // } catch (error) {
//     //     res.status(500).json(error)
//     // } 
//     // console.log("ok")
//     res.send("hey sakib")
// })
mangoos.connect(process.env.MONGODB_URL).then(()=>console.log("ok")).catch((err)=>console.log(err))
app.get('/', (req, res) => {
//   const all_location=location_model.find()
  res.send('Hello World-4!')
})
app.get("/sex",(req,res)=>{res.send("bohut tej")})
app.use("/api/location",location_router)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})