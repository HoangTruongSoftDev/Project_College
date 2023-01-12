"""
Assignment 3
Name: Hoang Truong Pham
Student ID: 202130169

Question 4: Given an input string, count occurrences of all characters within a string


"""
str1 = input("Enter a string: ")
dict1 = {}
for item in str1:
    dict1[item] = str1.count(item)
print("Occurrences of all characters within a string: ", dict1)