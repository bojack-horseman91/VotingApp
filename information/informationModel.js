const mangoos = require("mongoose")
const Voting_location_schema=mangoos.Schema({
    position:{type:String},
    name:{type:String},
    phone:{type:String}
})

module.exports= mangoos.model("List_Schema",Voting_location_schema)