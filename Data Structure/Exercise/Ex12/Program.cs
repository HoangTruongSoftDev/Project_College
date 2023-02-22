using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ex12
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Please enter the dimesion of the array: ");
            int n = Convert.ToInt32(Console.ReadLine());
            int[] array = new int[n];
            for (int i = 0; i < n; i++)
            {
                Console.Write("Please enter the " + i +"th value: ");
                array[i] = Convert.ToInt32(Console.ReadLine());
            }
            Quick_Sort quick_Sort = new Quick_Sort(array);
            quick_Sort.Sort(array, 0, (array.Length) - 1);
            Console.WriteLine("================Below is the sorted array============");
            quick_Sort.Print(array);
            Console.ReadKey();
        }
    }
}
