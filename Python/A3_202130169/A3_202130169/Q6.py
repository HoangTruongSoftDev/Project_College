"""
Assignment 3
Name: Hoang Truong Pham
Student ID: 202130169

Question 6: Write a Python program to reverse a given string



"""

def ReverseString(str1):
    list1 = list(str1)
    list1.sort()
    list1.reverse()
    str2 = ''
    for item in list1:
        str2 += item;
    return str2

str1 = input("Enter a string: ")
print("The original string: ", str1)
print("The reverse string: ",ReverseString(str1))

