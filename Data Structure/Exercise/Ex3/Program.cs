using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ex3
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Stack myStack = new Stack();

            Console.WriteLine("===================================");
            Console.WriteLine("Stack: ");
            Console.WriteLine("===================================");
            myStack.Push(25);
            myStack.Push(2023);
            myStack.Push(16);

            // This prints all the elements of the stack
            // myStack.PrintStack();

            // This fetches only the topmost value of the stack (without removing it from the stack)
            myStack.Peek();

            // This pops out the topmost element of the stack
            Console.WriteLine("The poped element of the stack is {0}",myStack.Pop());
            myStack.PrintStack();

            Console.ReadKey();
        }
    }
}
