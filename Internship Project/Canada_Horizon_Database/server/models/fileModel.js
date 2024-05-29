const { default: mongoose } = require("mongoose");

const FileSchema = new mongoose.Schema({
    name: String,
    data: Buffer,
    contentType: String
});

module.exports = mongoose.model('File', FileSchema);