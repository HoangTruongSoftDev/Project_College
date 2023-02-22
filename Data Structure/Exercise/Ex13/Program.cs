using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ex13
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.Write("Please enter the dimenstion of you array: ");
            int n = Convert.ToInt32(Console.ReadLine());
            int[] array = new int[n];
            for (int i = 0; i < n; i++)
            {
                Console.Write("Please enter the value for item #" + i + ": ");
                array[i] = Convert.ToInt32(Console.ReadLine());
            }
            // instantiate the class for merge sort        
            MergeSort ms = new MergeSort(array);
            ms.printArray(array);
            // call a method from this instace
            ms.Sort(array, 0, array.Length - 1);
            Console.WriteLine("Here is your sorted array");
            ms.printArray(array);

            Console.ReadKey();
        }
    }
}
