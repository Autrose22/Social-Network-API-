const { Schema, model, Types } = require('mongoose');
const { format_date } = require('../utils/DateFormat')

const ReactionsSchema = new Schema(
    {
 
    reactionId: {
        type: Schema.Types.ObjectId,
        default: ()=> new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (time) => format_date(time)
    }
    },
    {
    toJSON: {
        getters: true
    },
    id: false 
    }
);
