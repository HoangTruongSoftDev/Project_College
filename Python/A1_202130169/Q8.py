"""
Assignment 1
Name: Hoang Truong Pham
Student ID: 202130169

Question 8: Given a two list. Create a third list by picking an odd-index element from the
first list and even index elements from second.
"""

listOne = [3,6,9,12,15,18,21]
listTwo = [4,8,12,16,20,24,28]
listThree = listOne[1::2] + listTwo[::2]
print(listThree)
