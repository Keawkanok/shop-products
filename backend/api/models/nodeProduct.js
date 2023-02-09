const mongoose = require("mongoose");

const nodeSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    nameProduct: { type: String, required: true },
    numberPrice: { type: Number, required: true },
    notYetPain: { type: String },
    paid: { type: String },
    node: { type: String },
})

module.exports = mongoose.model('nodeProducts', nodeSchema)