const location_model=require("./informationModel")
const getAllLocation=async(req,res)=>{
    // console.log(location_model)
    console.log("you are in information list")
    try {
        const all_location=await location_model.find()
        res.status(200).json(all_location)
    } catch (error) {
        console.log("failure")
        res.status(500).json(error)
    } 
    // console.log("ok")
    // res.send("hey sakib")
}
const getOneLocation=async(req,res)=>{
    // console.log(location_model)
    
    console.log("finding only one")
    try {
        const all_location=await location_model.find({"location":req.query.location})
        res.status(200).json(all_location)
    } catch (error) {
        console.log("failure")
        res.status(500).json(error)
    } 
    // console.log("ok")
    // res.send("hey sakib")
}
const makeLocation=async(req,res)=>{
    const newLocation=new location_model(req.body)
    console.log("you are making a information")
    // console.log(req.body)
    try {
        console.log(newLocation)
        await newLocation.save()
        res.status(200).json(" Created information Successfull")
    } catch (error) {
        console.log("information creation failed")
        res.status(500).json(error)   
    }
}

module.exports={
    "makeLocation":makeLocation,
    "getAllLocation":getAllLocation,
    "getLocation":getOneLocation,

}