"""
Assignment 2
Name: Hoang Truong Pham
Student ID: 202130169
Question 7: Remove duplicate from a list and create a tuple and find the minimum and
maximum number

"""
sampleList = [87, 45, 41, 65, 94, 41, 99, 94]

set1 = set(sampleList)

tuple1 = tuple(set1)
maxNumber = max(tuple1)
minNumber = min(tuple1)
print('The Tuple without duplicated items is:', tuple1)
print('Maximum number in Tuple: ', maxNumber)
print('Minimum number in Tuple: ', minNumber)