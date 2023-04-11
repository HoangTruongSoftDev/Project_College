using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ex19
{
    class HeapSort
    {
       int[] array;
       public int count = 0;
        public HeapSort(int[] array)
        {
            this.array = array;
        }
        public HeapSort(){
            }
        public void Sort(int[] array)
        {
            for (int i=array.Length/2 - 1; i >= 0; i--)
            {
                Console.WriteLine("Loop 1");
                // Call a method which does the heapify process
                Heapify(array, array.Length, i);               
            }

            for (int i = array.Length - 1; i > 0; i--)
            {
                Console.WriteLine("Loop 2");
                int temp = array[0];
                array[0] = array[i];
                array[i] = temp;
                Heapify(array, i, 0);   
            }           
        }

        public void Heapify(int[] array, int Length, int i)
        {
            int largest = i;
            int left = 2 * i + 1;
            int right = 2 * i + 2;
            count++;
            // if left child is larger than root
            if (left < Length && array[left] > array[largest])
            {
                largest = left;
            }

            // if right child is larger than the largest (so far)
            if (right < Length && array[right] > array[largest])
            {
                largest = right;
            }

            // if largest is not root
            if (largest != i)
            {
                int swap = array[i];
                array[i] = array[largest];
                array[largest] = swap;

                // The above procedures should be repeated to make sub trees
                Heapify(array, Length, largest);
            }        
        }

        public void printArray(int[] array)
        {
            for (int i = 0; i <array.Length; i++)
            {
                Console.Write(array[i] + " ");
            }
            Console.WriteLine();
        }
    }
}