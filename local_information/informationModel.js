const mangoos = require("mongoose")
const Voting_location_schema=mangoos.Schema({
    position:{type:String},
    phone:{type:String}
})

module.exports= mangoos.model("Local_information_Schema",Voting_location_schema)