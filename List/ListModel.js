const mongoose=require("mongoose")

const List_Scheme=mongoose.Schema({
    location:{type:String}
})

module.exports=mongoose.model("Union_Scheme",List_Scheme)