const mangoos = require("mongoose")
const Voting_location_schema=mangoos.Schema({
    location:{type:String},
    locationURL:{type:String},
    imageURL:{type:String},
    presiding_officer:{name:{type:String},position:{type:String},phone:{type:String}},
    asst_presiding_officer:[{name:{type:String},position:{type:String},phone:{type:String}}],
    police_officer:{name:{type:String},position:{type:String},phone:{type:String}},
    vote_count:[{name:{type:String},vote:{type:Number}}]
})  

module.exports= mangoos.model("Voting_Location_Schema",Voting_location_schema)