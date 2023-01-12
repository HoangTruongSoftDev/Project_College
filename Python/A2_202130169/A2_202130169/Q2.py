"""
Assignment 2
Name: Hoang Truong Pham
Student ID: 202130169

Question 2: Given a list from a to e, iterate through the list, and count the occurrence of
each element, and create a dictionary to show the count of each element.
"""

sampleList =['a', 'c', 'b', 'd', 'd', 'a', 'e', 'a', 'e']
outcome = {}
print('The original list: ',sampleList)
for key in sampleList:
    outcome[key] = sampleList.count(key)
print()
print('A dictionary to show the count of each element: ', outcome)

#sampleList =['a', 'c', 'b', 'd', 'd', 'a', 'e', 'a', 'e']
#listCount = []
#for key in sampleList:
#    listCount.append(sampleList.count(key))
#zip1 = zip(sampleList,listCount)
#dict1 = dict(zip1)
#print(dict1)
