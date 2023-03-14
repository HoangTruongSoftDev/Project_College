using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PractiseAgain
{
    class TimSort //nlogn
    {
        int[] array;
        const int RUN = 4;
        public TimSort(int[] array)
        {
            this.array = array;
        }
        public void InsertionSort(int left, int right)
        {
            for (int i = left; i < right + 1; i++)
            {
                for (int j = i; j > left; j--)
                {
                    if (array[j] < array[j - 1])
                    {
                        int temp = array[j];
                        array[j] = array[j - 1];
                        array[j - 1] = temp;
                    }
                }
            }
        }
        public void MergeSort(int left, int right)
        {
            int middle = left + (right - left) / 2;
            int[] leftArray = new int[middle - left + 1];
            int[] rightArray = new int[right - middle];
            int leftIndex = 0, rightIndex = 0, arrayIndex = left;
            while (leftIndex < leftArray.Length)
            {
                leftArray[leftIndex++] = array[arrayIndex++];
            }
            while (rightIndex < rightArray.Length)
            {
                rightArray[rightIndex++] = array[arrayIndex++];
            }
            leftIndex = 0; rightIndex = 0; arrayIndex = left;
            while (leftIndex < leftArray.Length && rightIndex < rightArray.Length)
            {
                if (leftArray[leftIndex] < rightArray[rightIndex])
                {
                    array[arrayIndex++] = leftArray[leftIndex++];
                }
                else
                {
                    array[arrayIndex++] = rightArray[rightIndex++];
                }
            }
            while (leftIndex < leftArray.Length)
            {
                array[arrayIndex++] = leftArray[leftIndex++];
            }
            while (rightIndex < rightArray.Length)
            {
                array[arrayIndex++] = rightArray[rightIndex++];
            }
        }
        public void Sort()
        {
            for (int i = 0; i < array.Length; i += RUN)
            {
                InsertionSort(i, Math.Min(i + RUN - 1, array.Length - 1));
            }
            for (int i = RUN; i < array.Length; i *= 2)
            {
                for (int j = 0; j < array.Length; j += i * 2)
                {
                    MergeSort(j, Math.Min(j + i * 2 - 1, array.Length - 1));
                }
            }
        }

        public void insertion(int left, int right)
        {
            for (int i = left; i <= right; i++)
            {
                for (int j = i; j > left; j--)
                {
                    if (array[j] < array[j - 1])
                    {
                        int temp = array[j];
                        array[j] = array[j - 1];
                        array[j - 1] = temp;
                    }
                }
            }
        }
        public void merge(int left, int right)
        {
            int mid = left + (right - left) / 2;
            int[] leftArray = new int[mid - left + 1];
            int[] rightArray = new int[right - mid];
            int leftIndex = 0, rightIndex = 0, arrayIndex = left;
            while (leftIndex < leftArray.Length)
            {
                leftArray[leftIndex++] = array[arrayIndex++];
            }
            while (rightIndex < rightArray.Length)
            {
                rightArray[rightIndex++] = array[arrayIndex++];
            }
            leftIndex = 0; rightIndex = 0; arrayIndex = left;
            while ((leftIndex < leftArray.Length) && (rightIndex < rightArray.Length))
            {
                if (leftArray[leftIndex] < rightArray[rightIndex])
                {
                    array[arrayIndex++] = leftArray[leftIndex++];
                }
                else
                {
                    array[arrayIndex++] = rightArray[rightIndex++];
                }
            }
            while (leftIndex < leftArray.Length)
            {
                array[arrayIndex++] = leftArray[leftIndex++];
            }
            while (rightIndex < rightArray.Length)
            {
                array[arrayIndex++] = rightArray[rightIndex++];
            }
        }
        public void sort()
        {
            for (int i = 0; i < array.Length; i += RUN)
            {
                insertion(i, Math.Min(i+RUN-1,array.Length-1));
            }
            for (int i = RUN; i< array.Length; i *= 2)
            {
                for (int j = 0; j < array.Length; j += i * 2)
                {
                    merge(j, Math.Min(j + i - 1,array.Length-1));
                }
            }
        }
    }
}
