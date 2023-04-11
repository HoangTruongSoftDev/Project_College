using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ex24
{
    internal class Program
    {
        /*Implement a code which reads a tree (in an array or list format) and finds two elements which 
         * their summation is closest to a goal number. This number should be read from the console.*/
        static void FindPairAddition(int[] array, int numberCloseTo)
        {
            int left, right, sum, minRight, minLeft, min_sum, change;
            if (array.Length < 2)
            {
                Console.WriteLine("It should be longer array");
                return;
            }
            minLeft = 0;
            minRight = 1;
            min_sum = array[minLeft]  + array[minRight];
            change = Math.Abs(numberCloseTo - min_sum);
            Console.WriteLine("Change: " + change);
            for (left = 0; left<array.Length; left++)
            {
                for(right = left + 1; right < array.Length; right++)
                {
                    sum = array[left] + array[right];
                    
                    if (Math.Abs(numberCloseTo - sum) < change)
                    {
                        change = Math.Abs(numberCloseTo - min_sum);
                        min_sum = sum;
                        minLeft = left;
                        minRight = right;
                    }
                }
            }
            Console.Write("The elements with minimum addition values closest to "+ numberCloseTo +" are " + array[minLeft] + " and " + array[minRight]);
        }
        static void Main(string[] args)
        {
            int[] array = { 69, 7, 2, 4, 9, 8, 99, 73, 12, 64, 100, 500, 300, 234, 65, 432 };
            FindPairAddition(array, 100);
            Console.ReadKey();
        }
    }
}
