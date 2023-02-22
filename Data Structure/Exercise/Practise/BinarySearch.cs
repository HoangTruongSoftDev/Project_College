using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Practise
{
    class BinarySearch
    {
        int[] array;
        public BinarySearch(int[] array)
        {
            this.array = array;
        }
        public void Search(int searchNum, int left, int right)
        {
            if (left > right)
            {
                Console.WriteLine("The array is empty");
                return;
            }
            if (right - left == 1)
            {
                if (array[right] == searchNum)
                {
                    Console.WriteLine("FOund at index " + right);
                    return;
                }
                else if (array[left] == searchNum)
                {
                    Console.WriteLine("FOund at index " + left);
                    return;
                }
                else
                {
                    Console.WriteLine("Not Found");
                    return;
                }

            }
            //int middle = (right + left) / 2;
            int middle = left + (right - left) / 2;


            if (searchNum > array[middle])
            {
                left = middle + 1;
            }
            else if (searchNum <= array[middle])
            {
                right = middle;
            }
            Search(searchNum, left, right);
        }
    }
}
