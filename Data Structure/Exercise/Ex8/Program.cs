using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

// Jump Search is better than Binary Search at the aspect of storage. The Big O is O( log(n) )
// Jump Search requires sorted array
// Jump Search combines the binary Search and Linear Search. It first will do the Binary Search, and the last chunk will do the Linear Search
namespace Ex8
{
    internal class Program
    {
        static int JumpSeach(int[] array, int num)
        {
            int n = array.Length;
            int hopSize = (int)Math.Sqrt(n);

            int pastIndex = 0;

            while (array[Math.Min(hopSize, n) - 1] < num)
            {
                pastIndex = hopSize;
                hopSize += (int)Math.Sqrt(n);
                if (pastIndex >= n)
                    return -1;
            }
            while (array[pastIndex] < num)
            {
                pastIndex++;
                if (pastIndex == Math.Min(hopSize, n))
                    return -1;

            }
            if (array[pastIndex] == num)
                return pastIndex;
            return -1;

        }
        static void Main(string[] args)
        {
            int[] array = { 2, 4, 20, 75, 90, 124, 125, 200, 221, 243, 280, 300 };
            int num = 221;
            int location = JumpSeach(array, num);
            Console.WriteLine("Number found at location " + location);
            Console.ReadKey();
        }
    }
}
