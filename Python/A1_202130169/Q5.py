"""
Assignment 1
Name: Hoang Truong Pham
Student ID: 202130169

Question 5: Given a list of ints, return True if first and last number of a list is same
"""

list1 = input("Enter the list of integer you want (Note: leaving space between each index): ")
if list1.split()[0] == list1.split()[len(list1.split())-1]:
    returnValue = True
else:
    returnValue = False
print("Is first and last number of a list the same value? ", returnValue)
