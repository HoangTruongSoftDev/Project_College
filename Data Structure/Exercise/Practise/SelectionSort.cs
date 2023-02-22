using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Practise
{
    public class SelectionSort
    {
        int[] array;
        public SelectionSort(int[] array)
        {
            this.array = array;
        }   
        public void Selection_Sort(int minIndex) 
        {
            if (minIndex == array.Length)
                return;
            
            for (int i = minIndex + 1; i < array.Length; i++)
            {
                if (array[minIndex] > array[i])
                {
                    int temp = array[i];
                    array[i] = array[minIndex];
                    array[minIndex] = temp;
                }   
            }
            Selection_Sort(minIndex + 1);
        }
    }
}
