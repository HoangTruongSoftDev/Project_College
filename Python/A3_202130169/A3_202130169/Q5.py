"""
Assignment 3
Name: Hoang Truong Pham
Student ID: 202130169

Question 5: Given a list iterate it and count the occurrence of each element and create a
dictionary to show the count of each element


"""

list1 = [10, 20, 30, 10, 20, 40, 50]
dict1 = {}
for item in list1:
    dict1[item] = list1.count(item)
print("count the occurrence of each element", dict1)