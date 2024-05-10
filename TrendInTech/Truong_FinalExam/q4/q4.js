var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var LibItem = /** @class */ (function () {
    function LibItem(title, publishedYear, availabilityStatus) {
        this.title = title;
        this.publishedYear = publishedYear;
        this.availabilityStatus = availabilityStatus;
    }
    return LibItem;
}());
var Book = /** @class */ (function (_super) {
    __extends(Book, _super);
    function Book(author, title, publishedYear, availabilityStatus) {
        var _this = _super.call(this, title, publishedYear, availabilityStatus) || this;
        _this.author = author;
        return _this;
    }
    Book.prototype.return = function () {
        this.availabilityStatus = "Available";
        console.log("".concat(this.title, " book has been returned"));
    };
    Book.prototype.borrow = function () {
        this.availabilityStatus = "Unavailable";
        console.log("".concat(this.title, " book has been borrowed"));
    };
    return Book;
}(LibItem));
var Magazine = /** @class */ (function (_super) {
    __extends(Magazine, _super);
    function Magazine(author, title, publishedYear, availabilityStatus) {
        var _this = _super.call(this, title, publishedYear, availabilityStatus) || this;
        _this.author = author;
        return _this;
    }
    Magazine.prototype.read = function () {
        this.availabilityStatus = "Reading";
        console.log("".concat(this.title, " magazine has been read"));
    };
    return Magazine;
}(LibItem));
var DVD = /** @class */ (function (_super) {
    __extends(DVD, _super);
    function DVD(director, title, publishedYear, availabilityStatus) {
        var _this = _super.call(this, title, publishedYear, availabilityStatus) || this;
        _this.director = director;
        return _this;
    }
    DVD.prototype.watch = function () {
        this.availabilityStatus = "Watching";
        console.log("".concat(this.title, " dvd has been watched"));
    };
    DVD.prototype.borrow = function () {
        this.availabilityStatus = "Unavailable";
        console.log("".concat(this.title, " dvd has been borrowed"));
    };
    return DVD;
}(LibItem));
var book = new Book("JK Rowling", "Harry Potter and the Chamber of Secrets", 1998, "Available");
var magazine = new Magazine("Johnson", "National Geographic", 2022, "Available");
var dvd = new DVD("Christopher Nolan", "oppenheimer", 2023, "Available");
console.log("Before Borrowing or Watching");
console.log(book);
console.log(magazine);
console.log(dvd);
console.log("During Borrowing or Watching");
console.log(book);
console.log(magazine);
console.log(dvd);
book.borrow();
magazine.read();
dvd.borrow();
dvd.watch();
console.log("After Borrowing or Watching");
book.return();
