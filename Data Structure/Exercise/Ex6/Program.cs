using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ex6
{
    internal class Program
    {
        //Convert Decimal to Binary
        static void ConvertToBinary(int n)
        {
            if (n == 0)
            {
                Console.Write("0");
                return;
            }
            ConvertToBinary(n / 2);
            Console.Write(n%2);
        }
        static void Main(string[] args)
        {
            Console.WriteLine("Please enter your number: ");
            int n = Convert.ToInt32(Console.ReadLine());
            ConvertToBinary(n);
            Console.ReadKey();
        }
    }
}
