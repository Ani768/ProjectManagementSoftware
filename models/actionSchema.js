const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const actionSchema = new Schema({
    
    commonaction:{
        type:String,
    },
    actionBy: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    actionAt: {
        type: Date,
    }
},
{timestamps:{resolvedTime: 'resolvedTime'}}
);

module.exports = mongoose.model('action',actionSchema)
