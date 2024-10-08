const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sprintSchema = new Schema(
    {
        name:{
            type: String,
            required: true,
        },
        description:{
            type: String,
            required: true,
        },
        startDate:{
            type: Date,
            required: true,
        },
        endDate:{
            type: Date,
            required: true,
        },
        status:{
            type: String,
            enum:["Not Started","In Progress","Completed"],
            default: "Not Started",
        },
        tasks:[
            {
                type: Schema.Types.ObjectId,
                ref: "Page",
            },
        ],
        projectId:{
            types:Schema.Types.ObjectId,
            refer:"Project",
            required: true,
        }
    },
    {timestamps: true}
)

module.exports = mongoose.model("sprints",sprintSchema);