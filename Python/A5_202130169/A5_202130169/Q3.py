"""
Assignment 5
Name: Hoang Truong Pham
Student ID: 202130169

Question 3: Write a Python program to add two given lists and find the sum and difference
between lists. Use map () function.


"""




list1 = [6,5,3,9]
list2 = [0,1,7,7]
print("Original lists: ")
print(list1)
print(list2)
listOutput = map(lambda x,y: (x+y,x-y), list1,list2)
print("Result: ")
print(list(listOutput))

    



