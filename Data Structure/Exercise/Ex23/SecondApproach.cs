using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ex23
{
    class SecondApproach
    {
        int[] array;
        int n;
        public SecondApproach(int[] array, int n) 
        {
            this.array = array;
            this.n = n;
        }
        public void Analyzer()
        {
            int sum, min_sum = Int32.MaxValue;
            int left = 0, right = n - 1;
            int min_left = left, min_right = n-1;
            if (n < 2)
            {
                Console.Write("Invalid Input!");
                return;
            }
            // we have to call a sort algorithm
            sort(array, left, right);
            while (left < right)
            {
                sum = array[left] + array[right];
                if (Math.Abs(sum) < Math.Abs(min_sum))
                {
                    min_sum = sum;
                    min_left = left;
                    min_right = right;
                }
                if (sum < 0)
                {
                    left++;
                }
                else { right--; }
            }
            Console.WriteLine("The items which you looking for are: " + array[min_left] + " and " + array[min_right]);
        }
        public void sort(int[] array, int low, int high)
        {
            if (low<high)
            {
                // here we need to partition this array
                int part = Partition(array, low, high);
                sort(array, low, part - 1);
                sort(array, part + 1, high);
            }
        }
        public int Partition(int[] array, int low, int high)
        {
            int val = array[high];
            int i = low - 1;
            for (int j = low; j< high; j++)
            {
                if (array[j] <= val)
                {
                    i++;
                    int temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                }
            }
            int temp2 = array[i+1];
            array[i + 1] = array[high];
            array[high] = temp2;
            return i + 1;
        }
    }
}
