"""
Assignment 2
Name: Hoang Truong Pham
Student ID: 202130169

Question 3: Given a two list of equal size create a set such that it shows the element from
both lists in the pair
"""
while True:
    list1 = input('Enter the first list (make sure the leaving the space between each index): ')
    list1 = list1.split()
    list2 = input('Enter the second list (make sure the leaving the space between each index and the size must be equal the first list): ')
    list2 = list2.split()
    print('List 1 is: ',list1)
    print('List 2 is: ',list2)
    if len(list1) == len(list2):
        zip1 = zip(list1,list2)
        set1 = set(zip1)
        print('a set such that it shows the element from both lists in the pair: ',set1)
        break;
    else:
        print('The size of two list are not equal. Please do it again.')
