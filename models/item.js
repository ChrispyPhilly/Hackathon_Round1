const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const Item = new Schema(
    {
       name: {type: String, required: true},
        type: {type: Schema.Types.ObjectId, ref: 'Type'},
        image: {type: String, required: true},
        price: {type: Number, required: true},
        dimensionsImperial: {
            height: {type: Number, required: true},
            width:{type: Number, required: true},
            length: {type: Number},
            depth: {type: Number},
            seatHeight: {type: Number},
            headboardHeight: {type: Number},
            diameter: {type: Number},
            }
        ,
        material: {type: String, required: true},
        isInStock: {type: Boolean, required: true},
        stock: {type: Number, required: true}

    },
    {timestamps: true},
)

module.exports = Item