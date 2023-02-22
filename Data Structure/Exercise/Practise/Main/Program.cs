using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Practise
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
            #region Binary Search
            //int[] array = { 3, 4, 5, 7, 8, 9, 11, 22, 100, 99, 16, 28, 78, 54 };
            //BinarySearch br = new BinarySearch(array);
            //br.Search(78, 0, array.Length - 1);
            #endregion

            #region Jump Search
            //int[] array = { 2,3,8,9,11,22,35,64,78,90 };
            //JumpSearch br = new JumpSearch(array);
            //br.jump_Search(11,0,Convert.ToInt32(Math.Sqrt(array.Length)));
            #endregion

            #region Insertion Sort
            //int[] array = { 2, 3, 11, 1, 5, 88, 75, 43, 100, 31, 24, 16 };
            //Insertion_sort insertion_Sort = new Insertion_sort(array);
            //insertion_Sort.insertionSort(0, 1);
            //PrintArray(array);
            #endregion

            #region Selection Sort
            //int[] array = { 69, 7, 2, 4, 9, 8, 99, 73, 12, 64 };
            //SelectionSort selectionSort = new SelectionSort(array);
            //selectionSort.Selection_Sort(0);
            //PrintArray(array);
            #endregion

            #region Quick Sort
            //int[] array = { 69, 7, 2, 4, 9, 8, 99, 73, 12, 64 };
            //QuickSort quickSort = new QuickSort(array);
            //quickSort.Sort(0, array.Length - 1);
            //PrintArray(array);
            #endregion

            #region Merge Sort
            //int[] array = { 69, 7, 2, 4, 9, 8, 99, 73, 12, 64,100,500,300,234,65,432 };
            //MergeSort mergeSort = new MergeSort(array);
            //mergeSort.Divide(0, array.Length - 1);
            //PrintArray(array);

            #endregion

            #region Square Root
            //SquareRoot squareRoot = new SquareRoot();
            //double sqrt = squareRoot.Sqrt(5.0, 1.0);
            //Console.WriteLine("Square root is: " + sqrt);5
            #endregion

            #region Complextity
            Console.Write("Please enter n: ");
            int n = Convert.ToInt32(Console.ReadLine());
            Console.Write("Please enter m: ");
            int m = Convert.ToInt32(Console.ReadLine());
            ComputationalComplexity computationalComplexity = new ComputationalComplexity(m, n);
            computationalComplexity.NestedLoop(m, n);
            #endregion
            Console.ReadKey();
        }
    }
}
