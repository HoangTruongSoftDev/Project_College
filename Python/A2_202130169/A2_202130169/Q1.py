"""
Assignment 2
Name: Hoang Truong Pham
Student ID: 202130169

Question 1: Given a list slice it into a three chunks, (the last one could be equal with others)
and then display in normal order and also reverse order.
"""

list1 = input('Enter the list you want to display (make sure that leaving the space between each element): ')
list1 = list1.split()
print('First chunk: ',list1[:int(len(list1)/3)])
print('Second chunk: ',list1[int(len(list1)/3):int(len(list1)/3)+int(len(list1)/3)])
print('Third chunk: ',list1[int(len(list1)/3)+int(len(list1)/3):])

print('The list in normal order: ', list1)
list1.reverse()
print('The list in reverse order: ', list1)