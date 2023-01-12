"""
Assignment 1
Name: Hoang Truong Pham
Student ID: 202130169

Question 3: Given a string of odd length greater 7, return a string made of the middle three
chars of a given String
"""
str1 = input("Enter the string of odd length greater than 7: ")
if (len(str1) % 2 ==0):
    print("The string you enter is the even length")
else:
    if len(str1) < 7:
        print("The lenth of string you enter is smaller than 7")
    else:
        str1 = str1[int(((len(str1)+1)/2))-2:int(((len(str1)+1)/2))+1]  
        print ("string made of the middle three chars of a given String: ",str1)
