"""
Name: Hoang Truong
Assignment 6
Question 4: Write a python program to find the longest words in a file.
"""

with open("text1.txt",'r') as rFile:
    words = rFile.read().split()
    maxCharacter = 0
    longestWord = None
    for word in words:
        if len(word) > maxCharacter:
            longestWord = word
            maxCharacter = len(word)
print("Longest words in a file: ", longestWord)
   
