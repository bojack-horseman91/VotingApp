const list_model=require("./ListModel")

const getList=async(req,res)=>{
    
    try {
        const list_of_area=await list_model.find();
        console.log("got the list")
        res.status(200).json(list_of_area)
    } catch (error) {
        console.log("failure")
        res.status(500).json(error)
    }

}

const makeList=async(req,res)=>{
    const list=new list_model(req.body)
    console.log("you are making adding a union or pourashova to the list")
    try {
        await list.save()
        console.log("added a union or pourashova")
        res.status(200).json("successfully added a union or pourashova")
    } catch (error) {
        console.log("failure")
        res.status(500).json(error)
    }

}

module.exports={
    "getList":getList,
    "addUnionOrPourashova":makeList
}