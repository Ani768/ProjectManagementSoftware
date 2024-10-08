const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blockSchema = new Schema(
    {
        blockId:{
            type: String,
            required: true,
            auto: true,
        },
        type: {
            type: String,
            required: true,
            enum: ["text", "image", "video", "todo", "header", "quote", "embed", "divider", "callout"], // Expanded block types
        },
        content:[
             {
            type: String,
            required: true,
        },
    ],
    properties:{
        title:[
            {
                type: String,
                required: true,
            },
        ],
        checked:[
            {
                type: String,
                requried: true,
                default: "No",
            },
        ],
    },
        parent: {
                type: Schema.Types.ObjectId,
                ref: "Block", 
            },
        order: {
            type: Number, 
            required: true,
        },
        isArchived: {
            type: Boolean,
            default: false, 
        },
        createdBy: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        updatedAt: {
            type: Date,
            default: Date.now, 
        },
    },
    { timestamps: true }
);

const pageSchema = new Schema(
    {
        pageId: {
            type: Schema.Types.ObjectId,
            required: true,
            auto: true,
        },
        title: {
            type: String,
            required: true, 
        },
        description: {
            type: String, 
        blocks: [blockSchema],
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        collaborators:[
            {
                type: Schema.Types.ObjectId,
                ref: "User", 
            },
        ],
        isArchived: {
            type: Boolean,
            default: false, 
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Page", pageSchema);



