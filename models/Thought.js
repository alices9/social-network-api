const { Schema, model } = require("mongoose");

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now
        },
        username: {
            type: String,
            required: true
        },
        reactions: []
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false
    }
);

thoughtSchema
    .virtual(reactionCount)
    .get(function () {
        return this.reactions.length
    })

// Initialize our Thought model
const Thought = model('thought', thoughtSchema);

module.exports = thoughtSchema;