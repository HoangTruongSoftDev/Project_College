using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ex23
{
    internal class Program
    {
        static void FindPair(int[] array, int array_size)
        {
            int left, right, min_sum, sum, min_left, min_right;
            if (array_size < 2)
            {
                Console.WriteLine("Invalid input!");
                return;
            }
            min_left = 0;
            min_right = 1;
            min_sum = array[0] + array[1];

            for (left=0; left < array_size; left++)
            {
                for(right = left+1; right < array_size; right++)
                {
                    sum = array[left] + array[right];
                    if (Math.Abs(min_sum) > Math.Abs(sum))
                    {
                        min_sum = sum;
                        min_left = left;
                        min_right = right;
                    }
                }
            }
            Console.Write("The elements with minimum addition values closest to zero are " + array[min_left] + " and " + array[min_right]);
        }
        static void Main(string[] args)
        {
            int[] array = { 69, 7, 2, 4, 9, 8, 99, 73, 12, 64, 100, 500, 300, 234, 65, 432 };
            FindPair(array, array.Length);
            Console.WriteLine("\n==========================================================================================");
            SecondApproach sp = new SecondApproach(array, array.Length);
            sp.Analyzer();
            Console.ReadKey();
        }
    }
}
