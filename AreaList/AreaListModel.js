const mangoos = require("mongoose")
const Voting_list_schema=mangoos.Schema({
    location:{type:String},
    list:[{type:String}]
    
})

module.exports= mangoos.model("Area_List_Schema",Voting_list_schema)