using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ex14
{

    public class TimSort
    {
        int[] array;
        public TimSort(int[] array)
        {
            this.array = array;
        }   
        public void Insertion(int[] array, int left, int right)
        {
            for (int i = left + 1; i <= right; i++)
            {
                int temp = array[i];
                int j = i - 1;
                while (j >=left && array[j] > temp)
                {
                    array[j+1] = array[j];
                    j--;
                }
                array[j + 1] = temp;
            }
        }
        public void Merge(int[] array, int left, int mid, int right)
        {
            int len1 = mid - left + 1;
            int len2 = right - mid;
            int[] leftArray = new int[len1];
            int[] rightArray = new int[len2];
            for (int x = 0; x < len1; x++)
            {
                leftArray[x] = array[left+x];
            }
            for (int x = 0; x < len2; x++)
            {
                rightArray[x] = array[mid + 1 + x];
            }
            int i = 0; int j = 0;
            int k = left;

        }
    }
}
