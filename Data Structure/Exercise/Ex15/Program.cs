using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ex15
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.Write("Please enter the length of the array: ");
            int n = Convert.ToInt32(Console.ReadLine());
            int[] array = new int[n];
            for (int i = 0; i < n; i++)
            {
                Console.Write("Enter " + i +"th value: ");
                array[i]= Convert.ToInt32(Console.ReadLine());
            }
            // instaciate a class for a sort
            BubbleSort bubble = new BubbleSort(array);
            //call a print method for printing the current values of this array
            bubble.printArray(array);
            // call the sort method from this object
            bubble.Sort(array);
            // call the print method from this object
            bubble.printArray(array);
            Console.ReadKey();
        }
    }
}
