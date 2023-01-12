"""
Name: Hoang Truong
Assignment 6
Question 3: Write a Python program that sum the length of the names of a given list of names
after removing the names that starts with a lowercase letter. Use lambda function. In the other,
find the length of the names starts with uppercase.
"""

sample_names = ['sally', 'Dylan', 'rebecca','Diana', 'Joanne', 'keith']

def func1(listName):
    sumLen = 0
    listFilter = list(filter(lambda x: x[0]>'A' and x[0] < 'Z', listName))
    for element in listFilter:
        sumLen += len(element)
    return sumLen

print("Result: ", func1(sample_names))
