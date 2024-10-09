const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const commentSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    lastEditedBy: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    lastEditedAt: {
        type: Date
    },
    attachments: [{
        fileName: String,
        fileType: String,
        fileUrl: String,
        fileSize: Number
    }],
    mentions: [{
        user: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        startIndex: Number,
        endIndex: Number
    }],
    parentComment: {
        type: Schema.Types.ObjectId,
        ref: "Comments",
    },
    resolved:{
        type:Schema.Types.ObjectId,
        ref:"action",
    },

    reaction:{
        types:Schema.Types.ObjectId,
        ref:"action"
    },
  Participants:[{
        type: Schema.Types.ObjectId,
        ref: "User",
    },],
    url:{
        type: String,
    }

}, {
     timestamps: {createdAt: 'createdTime', updatedAt: 'lastEditedTime'},
});


module.exports = mongoose.model('Comments',commentSchema);
