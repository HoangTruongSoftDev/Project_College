using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;

namespace Practise
{
    class QuickSort
    {
        int[] array;
        public QuickSort(int[] array)
        {
            this.array = array;
        }
        public int PartitionIndex(int left, int right ) 
        {
            int pivot = array[right];
            int sortedIndex = left;
            for (int i = left; i<right; i++)
            {
                if (pivot > array[i]) 
                {
                    int temp = array[sortedIndex];
                    array[sortedIndex] = array[i];
                    array[i] = temp;
                    sortedIndex++;
                }
            }
            // If I don't have the code in the comment below, it will raise the error. Why? Because it will make the code more comlexity 

            //int temp1 = array[sortedIndex];
            //array[sortedIndex] = array[right];
            //array[right] = temp1;
            return sortedIndex;
        }
        public void Sort(int left, int right) 
        {
            if (left < right)
            {
                int partitionIndex = PartitionIndex(left, right);
                Sort(left, partitionIndex - 1);
                Sort(partitionIndex, right);
            }
        }
    }
}
