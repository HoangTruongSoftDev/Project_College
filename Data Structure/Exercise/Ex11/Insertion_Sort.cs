using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ex11
{
    class Insertion_Sort
    {
        int[] array;
        public Insertion_Sort(int[] array)
        {
            this.array = array;
        }
        #region
        public void sort()
        {
            for (int i = 0; i < array.Length; i++)
            {
                int key = array[i];
                int j = i - 1;
                while (j >= 0 && array[j] > key)
                {
                    array[j + 1] = array[j];
                    j = j - 1;
                }
                array[j + 1] = key;
            }
        }
        #endregion

        // 4 2 1 3
        // 
        /*
          
            i = 1 (index)
            key = 2
            j = 0
            4 4 1 2
            j = -1

            2 4 1 2
        
            i = 2 (index)
            key = 1
            j = 1;  (index)
            2 4 4 3
            j = 0
            2 2 4 3
            j = -1
            1 2 4 3

            i = 3 (index) 
            key = 3
            j = 2 (index)
            1 2 4 4
            
         */
        public void sortArray() //complete by yourself
        {
            
            for (int i = 0; i < array.Length; i++)
            {
                int currentValue = array[i]; 
                int indexSort = i - 1;
                while (indexSort > 0 && array[indexSort] > currentValue)
                {
                    int temp = currentValue;
                    currentValue  = array[indexSort];
                    array[indexSort] = temp;
                    --indexSort;
                }

            }
        }
        public void printSortedArray(int[] array)
        {
            for (int i = 0; i < array.Length; ++i)
            {
                Console.Write(array[i] + " ");
            }
            Console.WriteLine();
        }
    }
}
