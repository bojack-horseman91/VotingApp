const location_model=require("./VotingLocationModel")
const getAllLocation=async(req,res)=>{
    console.log(location_model)
    console.log("you are in location")
    try {
        const all_location=await location_model.find()
        res.status(200).json(all_location)
    } catch (error) {
        res.status(500).json(error)
    } 
    // console.log("ok")
    // res.send("hey sakib")
}

const makeLocation=async(req,res)=>{
    const newLocation=new location_model(req.body)
    console.log("you are making a location")
    console.log(req.body)
    try {
        console.log(newLocation)
        await newLocation.save()
        res.status(200).json("Location Created Successfull")
    } catch (error) {
        res.status(500).json(error)   
    }
}

module.exports={
    "makeLocation":makeLocation,
    "getAllLocation":getAllLocation,

}