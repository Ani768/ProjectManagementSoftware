const mongoose = require('mongoose');
const Schema=  mongoose.Schema;

const taskSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
          },
         description: {
            type: String,
          },
          projectId: {
            type: Schema.Types.ObjectId,
            ref: "Project",
          },
          sprintId: {
            type: Schema.Types.ObjectId,
            ref: "Sprint",
          },
          assigner:{
            type:Schema.Types.ObjectId,
            ref: "User",
          },
          assignee: {
            type: Schema.Types.ObjectId,
            ref: "User",
          },
          status: {
            type: String,
            enum: ["To Do", "In Progress", "Completed"],
            default: "To Do",
          },
          parentTask: {
            type: Schema.Types.ObjectId,
            ref: "tasks",
          },
          subtasks: [
            {
              type: Schema.Types.ObjectId,
              ref:"tasks",
            },
          ],
          priority: {
            type: String,
            enum: ["Low", "Medium", "High"],
            default: "Medium",
          },

          tags: [{
            type: String,
            trim: true
          }],
          blocking: [{                
            project: {
              type: Schema.Types.ObjectId,
              ref: "tasks"
            },
                 
          },
        ],
          blockedBy: [
            {             
            project: {
              type: Schema.Types.ObjectId,
              ref: "tasks"
            },        
          },
        ],

        attachments: [{
          fileName: String,
          fileType: String,
          fileUrl: String,
          fileSize: Number
      }],
        url: {
          type: String,
        },

        taskNumber:{
          type: Number,
        },

          dueDate: {
            type: Date,
          },

          delay:{
            type: Number,
          },

          completionDate: {
            type: Date,
          },
  
          createdBy: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
        lastEditedBy: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
          comments: [
            {
                type: Schema.Types.ObjectId,
                ref: "Comments",
            },
        ],
    }, {
    timestamps:{
      createdAt: 'createdTime', updatedAt: 'lastEditedTime'},
}
)

module.exports = mongoose.model("tasks", taskSchema);