using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PractiseAgain
{
    internal class Program
    {
        public static void PrintArray(int[] array)
        {
            foreach (int element in array)
            {
                Console.Write(element + " ");
            }
        }
        static void Main(string[] args)
        {
            int[] array = { 69, 7, 2, 4, 9, 8, 99, 73, 12, 64, 100, 500, 300, 234, 65, 432 };

            #region Merge Sort
            //MergeSort mergeSort = new MergeSort(array);
            //mergeSort.DividePart(0, array.Length - 1);
            #endregion

            #region Bubble Sort
            //BubbleSort bubbleSort = new BubbleSort(array);
            //bubbleSort.Sort();
            #endregion

            #region Quick Sort
            //QuickSort quickSort = new QuickSort(array);
            //quickSort.Sort(0, array.Length - 1);
            #endregion

            #region Selection Sort
            //SelectionSort selectionSort = new SelectionSort(array);
            //selectionSort.Sort();
            #endregion

            #region Insertion Sort
            //InsertionSort insertionSort = new InsertionSort(array);
            //insertionSort.Sort();
            #endregion

            #region Tim Sort
            TimSort timSort = new TimSort(array);
            timSort.Sort();
            #endregion

            PrintArray(array);

            #region BinarySearch
            //BinarySearch binarySearch = new BinarySearch(array);
            //binarySearch.Search(100, 0, array.Length - 1);
            #endregion

            #region Jump Search
            JumpSearch jumpSearch = new JumpSearch(array);
            jumpSearch.Search(99, 0, array.Length - 1,(int)Math.Sqrt(array.Length));
            #endregion
            Console.ReadKey();
        }
    }
}
