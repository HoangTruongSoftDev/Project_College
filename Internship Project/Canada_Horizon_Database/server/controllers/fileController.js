const randomString = require('randomstring')

function fileUpload(fileUploaded) {
    let name  = randomString.generate({
        length: 12,
        charset: 'alphabetic',
    })

    let fileExtension = fileUploaded.name;
}

const fileController = async(req, res) => {
    try {
        const {file} = req.file;
        fileUpload(file);
    }
    catch (err) {
        console.log(err);
        return res.status(500).send({message: "Internal Server Error"})
    }
}

module.exports = {fileController};