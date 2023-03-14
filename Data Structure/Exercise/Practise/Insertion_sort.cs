using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Practise
{
    class Insertion_sort
    {
        int[] array;
        public Insertion_sort(int[] array)
        {
            this.array = array;
        }
        

        public void insertionSort(int firstIndex, int secondIndex)
        {
            //Console.WriteLine("Before the loop: ");
            //Console.WriteLine("firstIndex: " + firstIndex);
            //Console.WriteLine("secondIndex: " + secondIndex);

            if (secondIndex == array.Length)
                return;
            if (array[secondIndex] < array[firstIndex])
            {
                //Console.WriteLine("Before swap not loop");
                //Console.WriteLine("array[firstIndex]: " + array[firstIndex]);
                //Console.WriteLine("array[secondIndex]: " + array[secondIndex]);
                int tempSwap = array[firstIndex];
                array[firstIndex] = array[secondIndex];
                array[secondIndex] = tempSwap;
                //Console.WriteLine("After swap");
                //Console.WriteLine("array[firstIndex]: " + array[firstIndex]);
                //Console.WriteLine("array[secondIndex]: " + array[secondIndex]);
                //Console.WriteLine();
                int temp = firstIndex;
                for (int i = temp-1; i >=0; i--)
                {
                    //Console.WriteLine("Inside the loop: ");
                    //Console.WriteLine("firstIndex: " + firstIndex);
                    //Console.WriteLine("i: "+i);
                    if (array[firstIndex] >= array[i])
                    {
                        Console.WriteLine("Break");
                        break;
                    }
                    else
                    {
                        //Console.WriteLine("Before swap loop");
                        //Console.WriteLine("array[firstIndex]: " + array[firstIndex]);
                        //Console.WriteLine($"array[{i}]: " + array[i]);
                        int tempSwap1 = array[firstIndex];
                        array[firstIndex] = array[i];
                        array[i] = tempSwap1;
                        
                        //Console.WriteLine("After swap loop");
                        //Console.WriteLine("array[firstIndex]: " + array[firstIndex]);
                        //Console.WriteLine($"array[{i}]: " + array[i]);
                        firstIndex = i;
                        //Console.WriteLine("FirstIndex in the loop: "+ firstIndex);
                    }
                }
                //Console.WriteLine("FirstIndex outside loop: " + firstIndex);
                firstIndex = temp;
            }
            //Console.WriteLine("After the loop: ");
            //Console.WriteLine("firstIndex: " + firstIndex);
            //Console.WriteLine("secondIndex: " + secondIndex);
            //Console.WriteLine("===============================================");
            //Console.WriteLine();
            insertionSort(firstIndex + 1, secondIndex + 1);
        }
    }
}
