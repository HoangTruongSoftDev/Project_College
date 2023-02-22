using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ex13
{
    class MergeSort
    {
        int[] array;
        public MergeSort(int[] array)
        {
            this.array = array;
        }
        public void merge(int[] array, int left, int mid, int right)
        {
            int sub1 = mid - left + 1;
            int sub2 = right - mid;

            int[] leftArray = new int[sub1];
            int[] rightArray = new int[sub2];
            int i, j;
            for (i = 0; i < sub1; i++)
            {
                leftArray[i] = array[left + i];
            }
            
            for (j = 0; j < sub2; j++)
            {
                rightArray[j] = array[mid + 1 + j];
            }
            i = 0; j = 0;
            int k = left;
            while (i < sub1 && j < sub2)
            {
                if (leftArray[i] <= rightArray[j])
                {
                    array[k] = leftArray[i];
                    i++;
                }
                else
                {
                    array[k] = rightArray[j];
                    j++;
                }
                k++;
            }
            
            while (i < sub1)
            {
                array[k] = leftArray[i];
                i++;
                k++;
            }
            while (j < sub2)
            {
                array[k] = rightArray[j];
                j++;
                k++;
            }
        }

        public void Sort(int[] array, int left, int right)
        {
            if (left < right)
            {
                int mid = left + (right - left) / 2;
                Sort(array, left, mid);
                Sort(array, mid + 1, right);
                merge(array, left, mid, right);
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
