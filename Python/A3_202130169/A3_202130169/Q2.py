
"""
Assignment 3
Name: Hoang Truong Pham
Student ID: 202130169

Question 2: Given an input string Count all lower case, upper case, digits, and special
symbols


"""


def CountFromInput(string1):
    listLower = []
    listUpper = []
    listDigit = []
    dictCount = {}
    listSpecialSymbol = []
    for index in range(len(string1)):
        if string1[index] >= chr(97) and string1[index] <= chr(122):
            listLower.append(string1[index])
        elif string1[index] >= 'A' and string1[index] <= 'Z':
            listUpper.append(string1[index])
        elif string1[index] > '0' and string1[index] < '9':
            listDigit.append(string1[index])
        else:
            listSpecialSymbol.append(string1[index])
    dictCount["Lower"] = len(listLower)
    dictCount["Upper"] = len(listUpper)
    dictCount["Digit"] = len(listDigit)
    dictCount["SpecialSymbols"] = len(listSpecialSymbol)
    return dictCount

dict1 = input("Enter a string: ")
dict1 = CountFromInput(dict1)
print("The total of lowercase: ", dict1["Lower"])
print("The total of uppercase: ", dict1["Upper"])
print("The total of digit: ", dict1["Digit"])
print("The total of special symbols: ", dict1["SpecialSymbols"])