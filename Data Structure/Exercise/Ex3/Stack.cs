using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ex3
{
    class Stack
    {
        static int MAX = 500;
        int top;
        int[] stack = new int[MAX];

        public bool IsEmpty()
        {
            return top < 0;
        }
        public Stack()
        {
            top = -1;
        }
        public bool Push(int data)
        {
            if (top >= MAX)
            {
                Console.WriteLine("Stack Overflow!");
                return false;
            }
            else
            {
                stack[++top] = data; // increment first then access the value of top
                return true;
            }
        }
        public int Pop()
        {
            if (top < 0)
            {
                Console.WriteLine("Stack underflow!");
                return 0;
            }
            else
            {
                int value = stack[top--]; //decrement after access to the value of top
                return value;
            }
        }
        public void Peek()
        {
            if (top < 0)
            {
                Console.WriteLine("Stack underflow!");
                return;
            }
            else
            {
                Console.WriteLine("The topmost value of the stack is: {0}", stack[top]);
            }
        }
        public void PrintStack()
        {
            if (top < 0)
            {
                Console.WriteLine("Stack Underflow");
                return;
            }
            else
            {
                Console.WriteLine("Value in this stack are: ");
                for (int i = top; i >= 0; i--)
                {
                    Console.WriteLine(stack[i]);
                }
            }
        }
    }

}
