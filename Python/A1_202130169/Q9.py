"""
Assignment 1
Name: Hoang Truong Pham
Student ID: 202130169

Question 9: Given an input list removes the element at index 4 and add it to the 2nd
position and also, at the end of the list

"""
List = [54,44,27,79,91,41]
print("Original String: " + str(List))
temp = List[4]
List.remove(temp)
List.insert(1,temp)
List.append(temp)
print("Alternative String: " + str(List))
    
    
        
