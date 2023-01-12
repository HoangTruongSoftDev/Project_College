"""
Assignment 2
Name: Hoang Truong Pham
Student ID: 202130169
Question 6: Given a dictionary get all values from the dictionary and add it in a list but
don't add duplicates
"""

speed ={'jan':47, 'feb':52, 'march':47, 'April':44, 'May':52, 'June':53, 'july':54, 'Aug':44, 'Sept':54}

set1 = set(speed.values())
list1 = list(set1)
print('The list of elements which are values of dictionary: ',list1)