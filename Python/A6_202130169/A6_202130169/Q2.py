"""
Name: Hoang Truong
Assignment 6
Question 2: Write a Python program to find intersection of two given arrays using Lambda
"""

print("Original arrays")
list1 = [1, 2, 3, 5, 7, 8, 9, 10]
list2 = [1, 2, 4, 8, 9]
print(list1)
print(list2)
listIntersection = list(filter(lambda x: x in list1, list2))

print("Intersection of the said arrays: ",end="")
print(listIntersection)

