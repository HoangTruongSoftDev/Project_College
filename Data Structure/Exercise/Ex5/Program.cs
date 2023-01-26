using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ex5
{
    // Find the The Fibonacci seri for n number
    // // The worst case is Big O(2n) or Big O(n) because they are both linear 
    internal class Program
    {
        static int Fibonacci(int n)
        {
            if (n == 0)
            {
                return 0;
            }
            if (n == 1 || n==2)
            {
                return 1;
            }
            else
            {
                return (Fibonacci(n-1) + Fibonacci(n-2));
            }
        }
        static void Main(string[] args)
        {
            Console.WriteLine("Please enter the number: ");
            int n = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("The Fibonacci seri for n number is: ");
            for (int i = 0; i < n; i++)
            {
                Console.Write(Fibonacci(i)+" ");
            }       
            Console.ReadKey();
        }
    }
}
