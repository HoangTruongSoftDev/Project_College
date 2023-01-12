"""
Assignment 2
Name: Hoang Truong Pham
Student ID: 202130169
Question 5: Iterate a given list and check if a given element already exists in a dictionary as
a key's value, display the output as a set and if not delete it from the set
"""


rollNumber = [47, 64, 69, 37, 76, 83, 95, 97]
sampleDict = {'Jhon':47, 'Emma':69, 'Kelly':76, 'Jason':97}

listValue = list(sampleDict.values())
set1 = set(rollNumber)

for item in rollNumber:
    if item not in listValue:
        set1.discard(item)
print('The items of Set which are the values existing in Dictionary: ',set1)

    
