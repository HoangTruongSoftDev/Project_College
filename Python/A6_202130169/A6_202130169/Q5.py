
"""
Name: Hoang Truong
Assignment 6
Question 5: Write a Python program to count the frequency of words in a file.
"""

with open("text1.txt",'r') as rFile:
    listWords = rFile.read().split()
    dictWords = {}
    for word in listWords:
        dictWords[word] = listWords.count(word)

    print("The frequency of words.")
    for word, frequent in dictWords.items():
        print(f"The frequency of \"{word}\" is: {frequent}")