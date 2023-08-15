from lib2to3.pytree import Node
from logging import root
from tkinter.messagebox import RETRY
from MyNode import *
from tkinter import *
import json
import sys
from json import JSONEncoder
from collections import namedtuple
import socket
import pickle
import base64
## After convert the math expression into the binary tree, using Tkinter to illustrate that tree

#Assume you received this JSON response
#treeJsonData = sys.argv[1]

# Parse JSON into an object with attributes corresponding to dict keys.

#data = json.loads(json_string)




#print("\n")
#print(sys.argv[1])

#treeJsonData = dict(json.loads(sys.argv[1]))
#for key, value in treeJsonData.items():
#    print(f'{key} -> {value}')

with open(r'C:\Truong\Lasalle College\Programming Feature\Project_College\Data Structure\Project_Data_Structure_Application\file.json', 'r') as f:
    jsonString = f.read()

data = json.loads(jsonString)
def convertFromStringToBinaryTree(dataOfJson):
    print("dataOfJson['data'] => ",dataOfJson['data'])
    root = MyNode(dataOfJson['data'])
    if dataOfJson['left'] != None:
        root.left = convertFromStringToBinaryTree(dataOfJson['left'])
    if dataOfJson['right'] != None:
        root.right = convertFromStringToBinaryTree(dataOfJson['right'])
    return root


rootTree = convertFromStringToBinaryTree(data);
def printOrder(rootNode):
    if rootNode == None:
        return 
    printOrder(rootNode.left)
    print(rootNode.data + " ")
    printOrder(rootNode.right)
print("Print In Order")
printOrder(rootTree)

def draw_tree(canvas, node, x, y, x_diff, y_diff):
    if node != None:
        canvas.create_rectangle(x-20, y-20, x+20, y+20, fill='white', outline='black')
        canvas.create_text(x, y, text=node.data)
        if node.left != None:
            canvas.create_line(x - 7, y + 7, x-x_diff, y+y_diff)
            draw_tree(canvas, node.left, x-x_diff, y+y_diff, x_diff/2, y_diff)
        if node.right != None:
            canvas.create_line(x + 7, y + 7, x+x_diff, y+y_diff)
            draw_tree(canvas, node.right, x+x_diff, y+y_diff, x_diff/2, y_diff)

illustration = Tk()
illustration.title("Convert math expression to binary tree")
illustration.geometry("550x500")
illustration.attributes("-topmost", True)
illustration.configure(bg="white")
canvas = Canvas(illustration, width=2000, height=2000)
canvas.pack()
draw_tree(canvas, rootTree, 1000, 50, 400, 100)

illustration.mainloop()