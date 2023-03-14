using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PractiseAgain
{
    internal class BinarySearch
    {
        int[] array;
        public BinarySearch(int[] array)
        {
            this.array = array;
        }
        public  void PrintArray(int[] array)
        {
            foreach (int element in array)
            {
                Console.Write(element + " ");
            }
        }
        public void Search(int number, int left, int right)
        {
            Console.WriteLine("Array: ");
            PrintArray(array);
            Console.WriteLine("left = " + left);
            Console.WriteLine("right = " + right);
            Console.WriteLine("number = " + number);
            if (left <= right)
            {
                int middle = left + (right- left) / 2;
                Console.WriteLine("middle = " + middle);
                Console.WriteLine($"array[{middle}] = " + array[middle]);
                Console.WriteLine($"left: array[{left}] = " + array[left]);
                Console.WriteLine($"right: array[{right}] = " + array[right]);
                if (array[middle] > number)
                {
                    Console.WriteLine("Loop left");
                    Search(number, left, middle - 1);
                }
                else if (array[middle] < number)
                {
                    Console.WriteLine("Loop right");
                    Search(number, middle + 1, right);
                }
                else
                {
                    Console.WriteLine("Found");
                }
            }
            else
            {
                Console.WriteLine("not Found");
            }
            
        }
    }
}
