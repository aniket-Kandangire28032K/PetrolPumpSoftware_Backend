import mongoose from "mongoose";

const staffSchema = new mongoose.Schema({
    name:{
        type:String,
        lowercase:true,
        trim:true,
        required:true
    },
    contact:{
        type:String,
        trim:true
    },
    address:{
         type:String,
        lowercase:true,
        trim:true,
    },
    role:{
        type:String,
        lowercase:true,
        enum:["employee","manager","admin","cashier","other"] 
    },
    dob:{
        type:String,
    },
    gender:{
        type:String,
        enum:["male","female","other"]
    },
    dateofjoin:{
        type:String
    },
    status:{
        type:String,
        enum:["active","leave","resigned"],
        default:"active"
    }
},{
    collection:"StaffDB"
})

const StaffModel = new mongoose.model("staff",staffSchema)

export default StaffModel;