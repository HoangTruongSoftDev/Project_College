// Ex1: Assuming an array is given to you which has 'm' dimension. Write a code to find a specific value in this array

using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ex1
{
    class Program
    {
        #region Accurate but not optimize
        //public static void FindValue(int[] arr, int num)
        //{
        //    for (int i = 0; i < arr.Length; ++i)
        //    {
        //        if (arr[i] == num)
        //        {
        //            Console.WriteLine("The number found at " + i);
        //            return;
        //        }
        //    }
        //    Console.WriteLine("This number does not exist!");
        //}
        //static void Main(string[] args)
        //{
        //    while (true)
        //    {

        //        Console.WriteLine("What is the dimension of your array?");
        //        int m = Convert.ToInt32(Console.ReadLine());    
        //        try
        //        {
        //            int[] array = new int[m];

        //            for (int i = 0; i < m; ++i)
        //            {
        //                Console.WriteLine("Please enter the element with id of " + i + ": ");
        //                array[i] = Convert.ToInt32(Console.ReadLine());
        //            }
        //            Console.WriteLine("Which number are going to find: ");
        //            int num = Convert.ToInt32(Console.ReadLine());
        //            FindValue(array, num);

        //            Console.ReadKey();
        //        }
        //        catch (Exception ex)
        //        {
        //            Console.WriteLine(ex.Message);
        //        }
        //    }  
        #endregion

        #region Binary Search Recurstion Function
        static int RecursiveBinarySearch(int[] array, int left, int right, int num)
        {
            if (right >= left)
            {
                int mid = left + (right - 1) / 2;
                if (array[mid] == num)
                    return mid;
                if (array[mid] > num)
                    return RecursiveBinarySearch(array, left, mid - 1, num);
                return RecursiveBinarySearch(array, mid + 1, right, num);
            }
            return -1;
        }
        #endregion

        static void BinarySearch(int[] array, int number)
        {

            int left = 0;
            int right = array.Length - 1;
            int mid;
            while (right - left > 1)
            {
                mid = (left + right) / 2;
                if (array[mid] < number)
                {
                    left = mid + 1;
                }
                else
                {
                    right = mid;
                }
            }
            if (array[left] == number)
            {
                Console.WriteLine("Number Found at index " + left);
            }
            else if (array[right] == number)
            {
                Console.WriteLine("Number Found at index " + right);
            }
            else
            {
                Console.WriteLine("Not Found");
            }
        }
        static void Main(string[] args)
        {
            #region linear search 
            //bool flag = false;
            //int[] array = { 12, -43, 89, 114, 34, 11, 0, 67 };
            //Console.WriteLine("You are looking for?");
            //int num = Convert.ToInt32(Console.ReadLine());
            //for (int i = 0; i < array.Length; ++i)
            //{
            //    if (array[i] == num)
            //    {
            //        flag = true;
            //    }
            //}
            //if (flag)
            //{
            //    Console.WriteLine("Number Found");
            //}
            //else
            //{
            //    Console.WriteLine("Number Not Found");
            //}
            #endregion
            #region Binary Search
            //int[] array1 = { 10, 11, 23, 39, 48, 95, 102, 206, 247, 312, 400, 401, 405 };
            //int number = 11;
            //BinarySearch(array1, number);
            #endregion

            #region Binary Search Recurstion
            int[] array = { -4, 7, 9, 13, 25, 67, 99, 128 };
            int num = -4;
            int result = RecursiveBinarySearch(array, 0, (array.Length - 1), num);
            if (result == -1)
            {
                Console.WriteLine("The number is not here");
            }
            else
            {
                Console.WriteLine($"The number is found at location {result}");
            }
            #endregion

            Console.ReadKey();
        }
    }
}
