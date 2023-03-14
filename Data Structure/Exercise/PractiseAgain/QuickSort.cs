using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PractiseAgain
{
    internal class QuickSort //n*logn
    {
        private int[] array;

        public QuickSort(int[] array)
        {
            this.array = array;
        }
        #region
        //public int DividePart(int left, int right) 
        //{
        //    int pivot = array[right];
        //    int indexSorted = left;
        //    for (int i = left; i < right; i++)
        //    {
        //        if (pivot > array[i])
        //        {
        //            int temp = array[indexSorted];
        //            array[indexSorted] = array[i];
        //            array[i] = temp;
        //            indexSorted++;
        //        }
        //    }
        //    int temp1 = array[right];
        //    array[right] = array[indexSorted];
        //    array[indexSorted] = temp1;
        //    return indexSorted;
        //}
        //public void Sort(int left, int right)
        //{
        //    if (left < right)
        //    {
        //        int middle = DividePart(left, right);
        //        Sort(middle, right);
        //        Sort(left,middle-1);
        //    }
        //}
        #endregion
        
        public int Partition( int left, int right)
        {
            int pivot = array[right];
            int sortedIndex = left;
            for (int i = left; i < right; i++) 
            {
                if (array[i] < pivot)
                {
                    int temp = array[i];
                    array[i] = array[sortedIndex];
                    array[sortedIndex] = temp;
                    sortedIndex++;
                }
            }
            int temp1 = array[right];
            array[right] = array[sortedIndex];
            array[sortedIndex] = temp1;
            return sortedIndex;
        }

        public void Sort(int left, int right) 
        {
            if (left < right)
            {
                int middle = Partition(left, right);
                Sort(left, middle - 1);
                Sort(middle + 1, right);
                
            }
        }


    }
}
