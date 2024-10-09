const mongoose= require('mongoose');
const Schema= mongoose.Schema;

const userSchema = new Schema(
    {
      username: {
        type:String,required:true
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      roleId:{
        type:String,required:true
      },
      roleName:{
        type:String,required:true
      },
      roleType:{
        type:String,enum:['Admin',"Viewer","Editor"],default:"Viewer"
      },
      phoneNumber:{
         type: Number,
         required: true,
      },
      status:{
        type:String,enum:['Active','Inactive'],default:'Inactive'
      },
      city:{
        type:String,required:true
      },
    },
    { timestamps: true }
  );

  module.exports = mongoose.model("User",userSchema);
