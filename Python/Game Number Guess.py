
"""

Name: Hoang Truong Pham


Question: Create a Python project to guess a number that has randomly selected.
Hint: you could use random module to generate a number from 0-100.

"""

from random import randint
print("Welcome to Number Guess\n")
answer = randint(0,100)


while True:
    num1 = int(input("Please input a number between 0 and 100: "))
    if num1 < answer:
        print("\nThis is lower than actual number. Please try again.")
    elif num1 > answer:
        print("\nThis is higher than actual number. Please try again.")
    else:
        print("\nThis is the correct number\nThank you for playing Number Guess. See you again")
        break
