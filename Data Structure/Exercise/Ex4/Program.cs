using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;

namespace Ex4
{
    // Find the factorial of n (n is integer number)
    class Program
    {
        //Define the function that find the factorial
        // The worst case is Big O(n) 
        static int Fact(int n) // the method in class contain Main entry point must be static
        {
            if (n == 0 || n == 1)
            {
                return 1;
            }
            else
            {
                return n * Fact(n - 1);
            }
        }
        static void Main(string[] args)
        {
            Console.WriteLine("Please enter n: ");
            int n = Convert.ToInt32(Console.ReadLine());
            int result = Fact(n);
            Console.WriteLine("The factorial of n is " + result);
            Console.ReadKey();
        }
    }
}
