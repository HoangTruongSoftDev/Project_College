"""
Name: Hoang Truong
Assignment 6
Question 1: : Write a Python program to check whether a given string is a positive number or not
using Lambda
"""



listCheck = ['0','1','2','3','4','5','6','7','8','9','.']
def is_num(listInput):
        listValidation = list(filter(lambda x: x in listCheck, listInput))
        if len(listInput) == len(listValidation):
            return "True"
        else:
            return "False"
print(is_num('26587'))
print(is_num('4.2365'))
print(is_num('-12547'))
print(is_num('00'))
print(is_num('A001'))
print(is_num('001'))



