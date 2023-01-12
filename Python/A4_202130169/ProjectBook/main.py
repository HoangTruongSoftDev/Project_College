from basisclasses.book import Book
if __name__ == "__main__":
    b1 = Book("The 1% Windfall", " Rafi Mohammed", "Publishers Weekly",1.1)
    b2 = Book("The Art of Pricing", "Rafi Mohammed","Publishers Weekly",2.2)
    b3 = Book("The Strategy and Tactics of Pricing", "Thomas T. Nagle","Routledge",3.3)
    b4 = Book("The Price Advantage", " Walter L. Baker", "Bloom",43.3)
    b5 = Book("Power Pricing", " Robert J. Dolan","Mirama", 2.54)

    print(f"The first Book: \n\t{b1}\n")
    print(f"The second Book: \n\t{b2}\n")
    print(f"The third Book: \n\t{b3}\n")
    print(f"The fourth Book: \n\t{b4}\n")
    print(f"The fifth Book: \n\t{b5}\n")
