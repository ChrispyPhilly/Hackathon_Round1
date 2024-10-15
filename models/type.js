const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const Type = new Schema(
    {
        type: {type: String, required: true},
        description: {type: String, required: true},
    },
    {timestamps: true},
)

module.exports = Type