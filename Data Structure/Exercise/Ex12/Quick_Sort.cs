using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ex12
{
    class Quick_Sort
    {
        int[] array;
        public Quick_Sort(int[] array)
        {
            this.array = array;
        }
        void Swap(int[] array, int i, int j)
        {
            int temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        } 
        int Partition(int[] array, int low, int high)
        {
            int pivot = array[high];
            int i = (low - 1);
            for (int j = low; j <= high - 1; j++)
            {
                if (array[j] < pivot)
                {
                    i++;
                    Swap(array, i, j);
                }
            }
            Swap(array, i + 1, high);
            return (i + 1);
        }
        public void Sort(int[] array, int low, int high)
        {
            if (low < high)
            {
                int loc = Partition(array, low, high);
                Sort(array, low, loc - 1);
                Sort(array, low + 1, high);
            }        
        }
        public void Print(int[] array)
        {
            for(int i = 0; i < array.Length; i++)
            {
                Console.Write(array[i]+" ");
            }
        }
    }
}
