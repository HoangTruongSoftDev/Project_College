"""
Assignment 2
Name: Hoang Truong Pham
Student ID: 202130169

Question 4: Given two sets, Checks if One Set is Subset or superset of Another Set. if the
subset is found delete all elements from that set

"""

firstSet = {27, 43, 34}
secondSet = {34, 93, 22, 27, 43, 53, 48}
finalSet = secondSet.difference(firstSet)
print('First set: ',firstSet)
print('Second set: ', secondSet)
if firstSet.issubset(secondSet):
    firstSet.clear()
    print('First set is the subset of second set, so all elements of first Set will be deleted!')
    print('The first set is also deleted from second set. The second set after removing subset is: ', finalSet)
elif firstSet.issuperset(secondSet):
    print('First set is superset of second set, so all elements of first Set  will not be deleted!')
    print('The second set is:', secondSet)
else:
    print('First set is not superset or subset of second set, so all elements of first set will not be deleted!')
    print('The second set is:', secondSet)
print('First Set after checking: ',firstSet)

