const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const reactionSchema = new Schema({
    emoji: {
        type: String,
        required: true
    },
    reactedBy: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }]
});

const resolvedSchema = new Schema({
    resolved: {
        type: Boolean,
        default: false
    },
    resolvedBy: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    resolvedAt:{
        type:Date,
    },

},
{timestamps:{resolvedTime: 'resolvedTime'}}
);

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
    reactions: [reactionSchema],
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
    resolved: [
        {
            resolved: {
                type: Boolean,
                default: false
            },
            resolvedBy: {
                type: Schema.Types.ObjectId,
                ref: "User",
            },
            resolvedAt:{
                type:Dazste,
            },
        }
    ],
    threadParticipants: [{
        type: Schema.Types.ObjectId,
        ref: "User",
    },],
    url:{
        type: String,
    }

}, {
     timestamps: {createdAt: 'createdTime', updatedAt: 'lastEditedTime'},
});


const Comment = mongoose.model("Comments", commentSchema);

module.exports = Comment;