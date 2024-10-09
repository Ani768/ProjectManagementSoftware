const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userOTPSchema = new schema({
    userid: String,
    otp: String,
    createdAt: Date,
    expiresAt:Date,
});

module.exports = mongoose.model('UserOTP',userOTPSchema);