using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PractiseAgain
{
    internal class SelectionSort //n^2
    {
        private int[] array;

        public SelectionSort(int[] array)
        {
            this.array = array;
        }
        public void Sort1()
        {
            for (int i = 0; i < array.Length; ++i)
            {
                int minIndex = i;
                for (int j = i+1; j < array.Length; ++j)
                {                 
                    if (array[minIndex] > array[j])
                    {
                        minIndex = j;
                    }
                }
                int temp1= array[minIndex];
                array[minIndex] = array[i];
                array[i] = temp1;
            }
        }

        public void Sort()
        {
            for (int i = 0;i < array.Length; ++i)
            {
                int minIndex = i;
                for (int j = i+1;j < array.Length; ++j)
                {
                    if (array[minIndex] > array[j])
                    {
                        minIndex=j;
                    }
                }
                int temp2= array[minIndex];
                array[minIndex] = array[i];
                array[i] = temp2;
            }
        }
    }
}
