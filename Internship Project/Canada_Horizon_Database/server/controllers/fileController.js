const FileDB = require("../datas/fileDB");

class FileController {
    static uploadFile(filePath) {
        return FileDB.uploadFile(filePath);
    }
    static downloadFile(fileId) {
        return FileDB.downloadFile(fileId);
    }
}

module.exports = FileController;