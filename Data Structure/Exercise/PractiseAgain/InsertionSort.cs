using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PractiseAgain
{
    internal class InsertionSort // n^2
    {
        private int[] array;

        public InsertionSort(int[] array)
        {
            this.array = array;
        }
        public static void PrintArray(int[] array)
        {
            foreach (int element in array)
            {
                Console.Write(element + " ");
            }
        }
        public void Sort()
        {
            for (int i = 0; i < array.Length-1; i++)
            {
                Console.WriteLine("Big loop");
                Console.WriteLine("i = " + i);
                if (array[i] > array[i + 1])
                {
                    Console.WriteLine("Before Swap first");
                    Console.WriteLine($"array[{i}] = " + array[i]);
                    Console.WriteLine($"array[{i + 1}] = " + array[i + 1]);
                    int temp = array[i];
                    array[i] = array[i + 1];
                    array[i + 1] = temp;
                    Console.WriteLine("After Swap first");
                    Console.WriteLine($"array[{i}] = " + array[i]);
                    Console.WriteLine($"array[{i+1}] = " + array[i + 1]);
                    Console.WriteLine("Print Array: ");
                    PrintArray(array);
                    Console.WriteLine();
                    int originalIndexI = i;
                    
                    for (int j =i-1; j >= 0; j--)
                    {
                        Console.WriteLine("Nested loop");
                        Console.WriteLine("j = " + j);
                        Console.WriteLine("i = " + i);
                        if (array[j] < array[i])
                        {
                            break;
                        }
                        else
                        {
                            
                            Console.WriteLine("Before Swap second");
                            Console.WriteLine($"array[{j}] = " + array[j]);
                            Console.WriteLine($"array[{i}] = " + array[i]);
                            int temp1 = array[j];
                            array[j] = array[i];
                            array[i] = temp1;
                            Console.WriteLine("After Swap second");
                            Console.WriteLine($"array[{j}] = " + array[j]);
                            Console.WriteLine($"array[{i}] = " + array[i]);
                            Console.WriteLine("Print Array: ");
                            PrintArray(array);
                            Console.WriteLine();
                            i = j;                 
                        }
                    }
                    i = originalIndexI;

                }
            }
        }

        public void Sort1()
        {
            for (int i = 0; i < array.Length; i++) 
            {
                for (int k = i; k > 0; k--)
                {
                    if (array[k] < array[k - 1])
                    {
                        int temp1 = array[k];
                        array[k] = array[k - 1];
                        array[k - 1] = temp1;
                    }
                }
            }
        }
    }
}
