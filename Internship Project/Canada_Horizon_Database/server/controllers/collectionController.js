const CollectionDB = require("../datas/collectionDB.js");

class CollectionController {
    static getProfessionList() {
        return CollectionDB.professionCollection;
    }

}

module.exports = CollectionController;