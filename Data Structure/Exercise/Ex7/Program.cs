using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ex7
{
    /*Given an array arr[] of non-negative integers and an integer sum, find a continuous subarray that adds to a given sum.

Note: There may be more than one subarrays with sum as the given sum, print first such subarray. 

Examples: 

Input: arr[] = {1, 4, 20, 3, 10, 5}, sum = 33
Output: Sum found between indexes 2 and 4
Explanation: Sum of elements between indices 2 and 4 is 20 + 3 + 10 = 33
    
    Solution from author: https://practice.geeksforgeeks.org/problems/subarray-with-given-sum-1587115621/1?utm_source=geeksforgeeks&utm_medium=article_practice_tab&utm_campaign=article_practice_tab
     */

    class Program
    { 
        static List<int> SumSubArray(List<int> list1, int num)
        {
            List<int> list2 = new List<int>();
            for (int i =0;i<list1.Count;++i)
            {
                int sum = list1[i];
                list2.Add(i);
                for (int j =i+1; j < list1.Count; ++j)
                {
                    sum += list1[j];
                    list2.Add(j);
                    if (sum == num)
                    {
                        return list2;
                    }
                }
                list2.Clear();
            }
            return list2;
        }
        static void Main(string[] args)
        {
            List<int> list1 = new List<int> { 1, 4, 0, 0, 3, 10, 5 };
            int sum = 7;
            List<int> list2 = SumSubArray(list1, sum);
            if (list2.Count == 0)
            {
                Console.WriteLine("No subarray");
            }
            else
            {
                Console.WriteLine($"There is sub array from index {list2[0]} to index {list2[list2.Count-1]}");
            }
            Console.ReadKey();
        }
    }
}
