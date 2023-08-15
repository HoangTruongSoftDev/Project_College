
import sys
from tkinter import *
app = Tk()
label1 = Label(app, text=sys.argv[1]).pack()
label2 = Label(app, text=sys.argv[2]).pack()
app.mainloop()
print(int(sys.argv[1]) + int(sys.argv[2]))


for line in sys.stdin:
    line = line.strip()
    print("Received input from C#: " + line)
