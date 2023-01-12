class Book:
    __counter = 1

    def __init__(self,bTitle = "N/A",bAuthor = "N/A", bEditor = "N/A",bPrice = 0.00):
        self.__bookId = Book.__counter
        self.__Title = bTitle
        self.__Author = bAuthor
        self.__Editor = bEditor
        self.__Price = bPrice
        Book.__counter += 1
    def __str__(self):
        return f"Book id: {self.__bookId}. Book name: {self.__Title}. Author Name: {self.__Author}. Price: {self.__Price}"
   
    def getBookId(self):
        return self.__bookId
   
    def getBookAuthor(self):
        return self.__Author

    def getBookEditor(self):
        return self.__Editor

    def getBookPrice(self):
        return self.__Price
    def setBookPrice(self,bPrice = 0.00):
        if bPrice >= 0:
            self.__Price = bPrice
        else:
            print(f"{bPrice} is NOT a Valid ID")
        
