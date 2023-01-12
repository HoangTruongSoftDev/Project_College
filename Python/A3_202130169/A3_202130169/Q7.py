"""
Assignment 3
Name: Hoang Truong Pham
Student ID: 202130169

Question 7:Write a Python program to construct the following pattern, using a nested for
loop.

"""

#str1 =""
#for index in range(10):
#    if index <= 5:
#        str1 +="*"
#    elif index > 5:
#        str1 = str1[0:-1]
#    print(str1)

iterate = 5
for loop in range(iterate):
    for j in range(loop):
        print ('* ', end="")
    print('')

for loop in range(iterate,0,-1):
    for j in range(loop):
        print('* ', end="")
    print('')



