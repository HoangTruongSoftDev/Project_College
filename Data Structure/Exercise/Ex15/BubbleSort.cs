using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ex15
{
    class BubbleSort
    {
        int[] array;
        public BubbleSort(int[] array) 
        {
            this.array = array;
        }
        public void Sort(int[] array) 
        { 
            for(int i = 0; i < array.Length-1; i++)
            {
                for (int j = 0; j< array.Length - 1; j++)
                {
                    if (array[j] > array[j + 1])
                    {
                        int temp = array[j];
                        array[j] = array[j + 1];
                        array[j + 1] = temp;
                    }
                }
            }
        }
        public void printArray(int[] array)
        {
            for (int i = 0; i < array.Length; i++)
            {
                Console.Write(array[i] + " ");
            }
            Console.WriteLine();
        }
    }
}
