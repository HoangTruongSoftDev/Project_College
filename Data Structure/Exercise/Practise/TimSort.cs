using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Practise
{
    class TimSort
    {
        int[] array;
        const int RUN = 4;
        public TimSort(int[] array) 
        {
            this.array = array;
        }
        public static void PrintArray(int[] array)
        {
            foreach (int element in array)
            {
                Console.Write(element + " ");
            }
            Console.WriteLine();
        }
        public void Merge(int left, int right)
        {
            Console.WriteLine("Array: ");
            PrintArray(array);
            Console.WriteLine("left = " + left);           
            Console.WriteLine("right = " + right);
            int mid = left + (right-left)/2;
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
            Console.WriteLine("Left Arrray: ");
            PrintArray(leftArray);
            Console.WriteLine("Right Arrray: ");
            PrintArray(rightArray);
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
            while(rightIndex < rightArray.Length) 
            {
                array[arrayIndex++] = rightArray[rightIndex++];
            }
        }
        public void Insertion(int left, int right)
        {
            Console.WriteLine("Array Before Insertion");
            PrintArray(array);
            Console.WriteLine("left = " + left);
            Console.WriteLine("right = " + right);
            for (int i = left; i <= right; i++) 
            {
                int j = i;
                Console.WriteLine("j = " + j);
                Console.WriteLine("i = " + i);
                while (j > left && array[j] < array[j - 1])
                {
                    Console.WriteLine("Before Swap");
                    Console.WriteLine($"array[{j}] = "+ array[j]);
                    Console.WriteLine($"array[{j-1}] = " + array[j-1]);
                    int temp = array[j];
                    array[j] = array[j - 1];
                    array[j - 1] = temp;
                    Console.WriteLine("After Swap");
                    Console.WriteLine($"array[{j}] = " + array[j]);
                    Console.WriteLine($"array[{j - 1}] = " + array[j - 1]);
                    j--;
                }                
            }

            Console.WriteLine("Array After Insertion");
            PrintArray(array);
        }  
        public void Sort() 
        {
            for (int i = 0; i < array.Length; i += RUN)
            {
                Insertion(i,Math.Min(i+RUN-1,(array.Length - 1)));
            }
            for (int i = RUN; i < array.Length; i *= 2)
            {
                for (int j = 0; j < array.Length; j += 2 * i)
                {                    
                    Console.WriteLine("***NESTED LOOP");
                    Console.WriteLine("left = " + j);
                    Console.WriteLine("right = " + Math.Min((j + i * 2 - 1), array.Length - 1));
                    Merge(j, Math.Min(j + i * 2 - 1, (array.Length - 1)));
                    Console.WriteLine("merge");
                }
                Console.WriteLine("*****************");
            }
        }
    }
}
