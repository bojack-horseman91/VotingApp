const location_model=require("./VotingLocationModel")
const fs = require('fs');

const getAllLocation=async(req,res)=>{
    
    console.log(location_model)
    console.log("you are in location")
    try {
        const all_location=await location_model.find()
        // Convert the all_location data to a JSON string
        
    //     const jsonData = JSON.stringify(all_location.map((loc)=>{return {"location":loc.location,
    //     "updates":{ 
    //         "presiding_officer": {
    //           "name": "অনন্ত জলিল",
    //           "position": "WRTIE POSITION",
    //           "phone": "01992970327"
    //         },
    //         "police_officer": {
    //           "name": "অনন্ত জলিল",
    //           "position": "WRTIE POSITION",
    //           "phone": "01992970327"
    //         }
    //       }

    // }})
    //     , null, 2);
    // // const jsonData = JSON.stringify(all_location.map((loc)=>{return loc.location
       

    // // })
    // //     , null, 2);

    //     // Write the JSON data to a text file named 'all_location.txt'
    //     fs.writeFileSync('all_location.txt', jsonData);
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
const updateOneLocation=async(req,res)=>{
    // console.log(location_model)
    
   

    try {
        const result=await location_model.updateOne(
            {"location":req.query.location}, // Specify the document you want to update
            { $set: req.body  } // Use $set to update the specific field
        );

        console.log(result);

        if (result.nModified > 0) {
            console.log('Field updated successfully');
        } else {
            console.log('Field not updated, document not found');
        }
        // console.log(Object.keys(req.body))
        // one_location.set()
        res.status(200).json(result)
    } catch (error) {
        console.log("failure")
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
        console.log("location creation failed")
        res.status(500).json(error)   
    }
}

module.exports={
    "makeLocation":makeLocation,
    "getAllLocation":getAllLocation,
    "getLocation":getOneLocation,
    "updateOneLocation":updateOneLocation,
}