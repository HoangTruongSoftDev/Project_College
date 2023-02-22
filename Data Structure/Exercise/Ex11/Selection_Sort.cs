using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ex11
{
    class Selection_Sort
    {
        int[] array;
        public Selection_Sort(int[] array)
        {
            this.array = array;
        }
        public void sort()
        {
            for (int i = 0; i < array.Length; i++)
            {
                int min_idx = i;
                for (int j = i+1; j < array.Length; j++)
                {
                    if (array[j] < array[min_idx])
                    {
                        min_idx = j;
                    }
                }
                int temp = array[min_idx];
                array[min_idx] = array[i];
                array[i] = temp;
            }
        }
        public void printSortedArray(int[] array)
        {
            for (int i = 0;i<array.Length;++i)
                Console.Write(array[i]+" ");
            Console.WriteLine();
        }
    }
}
