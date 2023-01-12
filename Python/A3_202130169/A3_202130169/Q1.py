"""
Assignment 3
Name: Hoang Truong Pham
Student ID: 202130169

Question 1: arrange String characters such that lowercase letters should come first
Given input String of combination of the lower and upper case arrange characters in such a way
that all lowercase letters should come first.

"""

def OrderString(str1):
    check = 0
    list1 = sorted(str1)
    str2 = ''
    for index in range(len(list1)):
        str2 += list1[index]
        if list1[index].isupper():
            check = index 
    str2 = str2[check+1:] + str2[0:check+1]
    return str2 

string1 = input("Enter a string: ")
print("The convert string is: ",OrderString(string1))


