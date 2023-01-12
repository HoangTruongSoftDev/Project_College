"""
Assignment 1
Name: Hoang Truong Pham
Student ID: 202130169

Question 4: Given a string and an int n, remove characters from string starting from zero
upto n and return a new string
"""
str1 = input("Enter the string you want: ")
num1 = int(input("Enter the amount of number that you want to remove from beginning: "))
if num1>=len(str1):
    print("The index you enter is not appropriate.")
else:
    str1 = str1[num1:] 
    print("This is a new string after deleting string from  0 to ",num1 , ": ", str1)
    
