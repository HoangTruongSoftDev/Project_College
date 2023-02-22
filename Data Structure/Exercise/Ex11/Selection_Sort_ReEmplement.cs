using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ex11
{
    class Selection_Sort_ReEmplement
    {
        int[] array;
        public Selection_Sort_ReEmplement(int[] array)
        {
            this.array = array;
        }
        public void Sort()
        {
            for (int i = 0; i < array.Length; i++)
            {
                int minIndex = i;
                for (int k = i + 1; k < array.Length; i++)
                {
                    if (array[k] < array[minIndex])
                    {
                        int temp = array[k];
                        array[k] = array[minIndex];
                        array[minIndex] = temp;
                    }
                }
            }
        }
        public void printSortedArray(int[] array)
        {
            for (int i = 0; i < array.Length; ++i)
                Console.Write(array[i] + " ");
            Console.WriteLine();
        }
    }
}
