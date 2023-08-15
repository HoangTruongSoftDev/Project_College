using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Practise
{
    class HeapSort
    {
        int[] array;
        public HeapSort(int[] array) 
        {
            this.array = array;
        }
        
        public void Sort() 
        {
            for (int i = array.Length/2 + 1; i >= 0; i--) 
            {
                Heapify(array.Length, i);
            }
            for (int i = array.Length - 1; i > 0; i--)
            {
                int temp = array[i];
                array[i] = array[0];
                array[0] = temp;
                Heapify(i, 0);
            }
        }
        public void Heapify(int lengthOfArray, int index)
        {
            int max_index = index;
            int left = index * 2 + 1;
            int right = index * 2 + 2;
            if (left < lengthOfArray && array[left] > array[max_index]) 
            {
                max_index = left;
            }
            if (right < lengthOfArray && array[right] > array[max_index])
            {
                max_index = right;
            }
            if (max_index != index)
            {
                int temp = array[max_index];
                array[max_index] = array[index];
                array[index] = temp;
                Heapify(lengthOfArray, max_index);
            }
        }
    }
}

