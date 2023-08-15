using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ex19
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int[] array = { 1, 4, 6, 3, 555, 33, 666, 888, 999, 2, 222, 444 };
            //int[] array = { 555, 444, 333, 222,111,11,10,9,8,7,6,5,4,3,2,1 };
            HeapSort heapSort = new HeapSort();
            heapSort.Sort(array);
            heapSort.printArray(array);
            Console.WriteLine("count: " + heapSort.count);
            Console.ReadKey();
        }
    }
}
