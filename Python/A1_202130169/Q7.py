"""
Assignment 1
Name: Hoang Truong Pham
Student ID: 202130169

Question 7: Find all occurrences of “USA” in given string (uppercase and lowercase).
"""


str1 = "Welcome to USA. usa awesome, isn't it?"
str1_upper = str1.upper()
occur1 = str1_upper.find("USA")
output = "All occurrences of \"USA\" in given string (uppercase and lowercase) are: " + str(occur1);
occur2 = str1_upper.find("USA",occur1 + 1)
output += " " +str(occur2)
print(output)
   



