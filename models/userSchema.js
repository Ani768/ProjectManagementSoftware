const mongoose= require('mongoose');
const Schema= mongoose.Schema;

const userSchema = new Schema(
    {
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
      phoneNumber: {
         type: Number,
         required: true,
      },
      isActive: {
        type: Boolean,
        required: true,
        default: false,
      },
      role: {
        type: String,
        enum: ["Admin", "Editor", "Viewer"],
        default: "Viewer",
      },
    },
    { timestamps: true }
  );

  module.exports = mongoose.model("User",userSchema);
