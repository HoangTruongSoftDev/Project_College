class LibItem {
    title: string;
    publishedYear: number;
    availabilityStatus: string;
    constructor(title: string, publishedYear: number, availabilityStatus: string) {
        this.title = title;
        this.publishedYear = publishedYear;
        this.availabilityStatus = availabilityStatus;
    }
}

class Book extends LibItem {
    author: string;
    constructor(author: string, title: string, publishedYear: number, availabilityStatus: string) {
        super(title, publishedYear, availabilityStatus);
        this.author = author;
    }
    return():void {
        this.availabilityStatus = "Available";
        console.log(`${this.title} book has been returned`);
    }
    borrow(): void {
        this.availabilityStatus = "Unavailable";
        console.log(`${this.title} book has been borrowed`);
    }
}

class Magazine extends LibItem {
    author: string;
    constructor(author: string, title: string, publishedYear: number, availabilityStatus: string) {
        super(title, publishedYear, availabilityStatus);
        this.author = author;
    }

    read():void {
        this.availabilityStatus = "Reading";
        console.log(`${this.title} magazine has been read`);
    }
}

class DVD extends LibItem {
    director: string;
    constructor(director: string, title: string, publishedYear: number, availabilityStatus: string) {
        super(title, publishedYear, availabilityStatus);
        this.director = director;
    }
    watch():void {
        this.availabilityStatus = "Watching";
        console.log(`${this.title} dvd has been watched`);
    }
    borrow(): void {
        this.availabilityStatus = "Unavailable";
        console.log(`${this.title} dvd has been borrowed`);
    }
}

const book = new Book("JK Rowling", "Harry Potter and the Chamber of Secrets", 1998, "Available");
const magazine = new Magazine("Johnson","National Geographic", 2022, "Available");
const dvd = new DVD("Christopher Nolan", "oppenheimer", 2023, "Available");

console.log("Before Borrowing or Watching")
console.log(book)
console.log(magazine)
console.log(dvd)

console.log("During Borrowing or Watching")
console.log(book)
console.log(magazine)
console.log(dvd)

book.borrow();
magazine.read();
dvd.borrow();
dvd.watch()
console.log("After Borrowing or Watching")
book.return();

console.log(book)
console.log(magazine)
console.log(dvd)


