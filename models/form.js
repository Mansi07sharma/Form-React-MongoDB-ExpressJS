import mongoose from "mongoose";

const info=mongoose.Schema({
    'name':String,
    'email':String,
    'country':String,
    'phone':Number,
    'check':Boolean
})

const information=mongoose.model('information',info)
export default information