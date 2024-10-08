const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    summary: {
        type: String,
        required: true,
    },
    about: {
        type: String,
        required: true,
    },
    projectNumber: {
        type: Number,
        required: true,
        unique: true,
    },
    assigner: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    members: [{
        type: Schema.Types.ObjectId,
        ref: "User",
    }],
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    lastEditedBy: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    attachments: [{
        fileName: String,
        fileType: String,
        fileUrl: String,
        fileSize: Number
    }],
    projectUrl: {
        type: String,
    },
    tasks: [{
        type: Schema.Types.ObjectId,
        ref: "Task",
    }],
    status: {
        type: String,
        enum: ["Not started", "In progress", "Completed"],
        default: "Not Started",
    },
    priority: {
        type: String,
        enum: ["Low", "Medium", "High"],
        default: "Medium",
    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: "Comment"
    }],
    budget: {
        type: Number,
        default: 0,
    },
    url:{
        type: String,

    },
    progress: {
        type: Number,
        min: 0,
        max: 100,
        default: 0,
    },
    tags: [{
        type: String,
    }],
    milestones: [{
        name: String,
        dueDate: Date,
        completed: {
            type: Boolean,
            default: false,
        },
    }],
}, {
    timestamps:{
        createdAt: 'createdTime', updatedAt: 'lastEditedTime'},
}
);



module.exports = mongoose.model("Project", projectSchema);