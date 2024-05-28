const { default: mongoose } = require("mongoose");

const fileSchema = new mongoose.Schema({
    name: {type: String, required: true},
    ext: {type: String, required: true},
    mimeType: {type: String, required: true},
    path: {type: String, required: true},
},{
    timestamps: true
})

const File =  mongoose.model("file", fileSchema);
module.exports = File;