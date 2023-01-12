
"""
Assignment 3
Name: Hoang Truong Pham
Student ID: 202130169

Question 3: We'll say that a String s1 and s2 is balanced if all the chars in the string1 are there in s2.
characters position doesn't matter.


"""
def checkingString(str1,str2):
    set1 = set(str1)
    set2 = set(str2)
    if set1.issubset(str2):
        return "True"
    else:
        return "False"
string1 = input("Enter the first string: ")
string2 = input("Enter the second string: ")
print(f"s1 and s2 are balanced {checkingString(string1,string2)}")

