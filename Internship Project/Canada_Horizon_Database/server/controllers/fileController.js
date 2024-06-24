const FileDB = require("../datas/fileDB");

class FileController {
    static uploadFile(filePath) {
        return FileDB.uploadFile(filePath);
    }
    static downloadFile(fileId) {
        return FileDB.downloadFile(fileId);
    }
    static saveTempFile(fileId) {
        return FileDB.saveTempFile(fileId);
    }
    static deleteFile(fileId) {
        FileDB.deleteFile(fileId)
    }
}

module.exports = FileController;