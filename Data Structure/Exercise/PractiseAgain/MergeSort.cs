using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PractiseAgain
{
    class MergeSort
    {
        private int[] array;
        public MergeSort(int[] array)
        {
            this.array = array;
        }

        #region
        //public void Merge(int left, int right)
        //{
        //    int middle = left + (right - left) / 2;
        //    int[] arrayLeft = new int[middle - left + 1];
        //    int[] arrayRight = new int[right - middle];
        //    int arrayLeftIndex = 0;
        //    int arrayRightIndex = 0;


        //    for (int i = left; i < middle + 1; i++)
        //    {
        //        arrayLeft[arrayLeftIndex++] = array[i];
        //    }

        //    for (int i = middle + 1; i < right + 1; i++)
        //    {
        //        arrayRight[arrayRightIndex++] = array[i];
        //    }
        //    arrayLeftIndex = 0;
        //    arrayRightIndex = 0;
        //    while (arrayLeftIndex< arrayLeft.Length && arrayRightIndex < arrayRight.Length)
        //    {
        //        if (arrayLeft[arrayLeftIndex] <= arrayRight[arrayRightIndex])
        //        {
        //            array[left++] = arrayLeft[arrayLeftIndex++];
        //        }
        //        else
        //        {
        //            array[left++] = arrayRight[arrayRightIndex++];
        //        }
        //    }
        //    while ( arrayRightIndex< arrayRight.Length)
        //    {
        //        array[left++] = arrayRight[arrayRightIndex++];
        //    }
        //    while (arrayLeftIndex < arrayLeft.Length)
        //    {
        //        array[left++] = arrayLeft[arrayLeftIndex++];
        //    }
        //}
        //public void DividePart(int left, int right)
        //{
        //    if (left < right)
        //    {
        //        int middle = left + (right - left) / 2;
        //        DividePart(left, middle);
        //        DividePart(middle + 1, right);
        //        Merge(left, right);
        //    }
        //}
        #endregion

        public void Merge(int left, int right)
        {
            int middle = left + (right - left) / 2;
            int[] leftArray = new int[middle - left + 1];
            int[] rightArray = new int[right - middle];
            int leftIndex = 0, rightIndex = 0, arrayIndex = 0;
            while (leftIndex < leftArray.Length)
            {
                leftArray[leftIndex++] = array[arrayIndex++];
            }
            while (rightIndex < rightArray.Length)
            {
                rightArray[rightIndex++] = array[arrayIndex++];
            }
            leftIndex = 0; rightIndex = 0; arrayIndex = 0;
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
            while (rightIndex < rightArray.Length)
            {
                array[arrayIndex++] = rightArray[rightIndex++];
            }
            while (leftIndex < leftArray.Length)
            {
                array[arrayIndex++] = leftArray[leftIndex++];
            }
        }
        public void Partition(int left, int right)
        {
            if (left < right)
            {
                int middle = left + (right - left)/2;
                Partition(left, middle);
                Partition(middle + 1, right);
                Merge(left, right);
            }
        }
    }
}
