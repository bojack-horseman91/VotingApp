const location_model=require("./VotingLocationModel")
const getAllLocation=(req,res)=>{
    // try {
    //     const all_location=await location_model.find()
    //     res.status(200).json(all_location)
    // } catch (error) {
    //     res.status(500).json(error)
    // } 
    console.log("ok")
    res.send("hey sakib")
}

const makeLocation=async(req,res)=>{
    const newLocation=new location_model(req.body)
    console.log(req)
    try {
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