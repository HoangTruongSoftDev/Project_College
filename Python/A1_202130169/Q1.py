"""
Assignment 1
Name: Hoang Truong Pham
Student ID: 202130169

Question 1: Accept two int values from user and return their product. If the product is
greater than 1000, then return their sum
"""

num1 = int(input("Enter the first number: "))
num2 = int(input("Enter the second number: "))

if num1 * num2 > 1000:
    print("The sum of", num1, "and", num2, "is:", num1 + num2)
else:
    print("The product of", num1, "and", num2, "is:", num1 * num2)

