"""
Assignment 1
Name: Hoang Truong Pham
Student ID: 202130169

Question 2: Accept five int values from user and return their average.
"""
str1 = "The addition of "
number = int(input("Enter the first number: "))
addition = number
str1 += str(number) + ", "
number = int(input("Enter the second number: "))
addition += number
str1 += str(number) + ", "
number = int(input("Enter the third number: "))
addition += number
str1 += str(number) + ", "
number = int(input("Enter the fourth number: "))
addition += number
str1 += str(number) + " and"
number = int(input("Enter the fifth number: "))
addition += number

print(str1, number, "is:" , addition)
