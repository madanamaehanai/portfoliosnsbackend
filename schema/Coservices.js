const mongoose = require("mongoose");



const CoservicesSchema = new mongoose.Schema({
    servicesname: {
        type: String,
        required: true,
        unique: true,
    },
    servicesurl: {
        type: String,
        required: true,
        uniqu: true,
    },
    servicesdesc: {
        type: String,
        default: "",
    },
    language: {
        type: Array,
        default: [],
    },
    chat: {
        type: Array,
        default: [],
    },
    userId: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
},
    //時間を格納
    { timestamps: true }
);

module.exports = mongoose.model("Coservices", CoservicesSchema);