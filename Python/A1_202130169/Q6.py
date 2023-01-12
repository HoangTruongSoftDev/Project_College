"""
Assignment 1
Name: Hoang Truong Pham
Student ID: 202130169

Question 6: Given 2 strings, s1 and s2, create a new string by appending s2 in the middle of
s1
"""

str1 = input("Enter first string: ")
str2 = input("Enter second string: ")
str3 = str1[:int(len(str1)/2)] + str2 + str1[int(len(str1)/2):]
print(str3)

