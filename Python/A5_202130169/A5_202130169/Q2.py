"""
Assignment 5
Name: Hoang Truong Pham
Student ID: 202130169

Question 2: Write a Python program to convert all the characters in uppercase and lowercase and
eliminate duplicate letters from a given sequence. Use map () function.


"""


def convertToLowercaseAndUppercase(char):
    return (char.upper(),char.lower())

print("Original Characters: ")

originalSet = {'f','b','U','i','o','E','a'}
print(originalSet)
outputSet = map(convertToLowercaseAndUppercase, originalSet)

print("After converting above characters in upper and lower cases and eliminating duplicate letters:\n")
print(set(outputSet))



