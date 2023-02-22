using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Practise
{
    class MergeSort
    {
        int[] array;
        public MergeSort(int[] array)
        {
            this.array = array;
        }
        public void Merge(int left, int right)
        {
            int middle = left + (right - left) / 2;
            int[] leftArray = new int[middle - left + 1];
            int[] rightArray = new int[right - middle];
            int indexLeftArray = 0;

            // Why miy code is wrong?
            for (int i = left; i < middle + 1; i++)
            {
                leftArray[indexLeftArray] = array[i];
                indexLeftArray++;
            }
            //for (int i = 0; i < leftArray.Length; i++)
            //{
            //    leftArray[i] = array[left+i];
                
            //}
            Console.WriteLine("============Left Array============");
            foreach (int item in leftArray)
            {
                Console.WriteLine(item + " ");
            }
            Console.WriteLine("========================");

            int indexRightArray = 0;

            // Why mh code is wrong?
            for (int i = middle + 1; i < right + 1; i++)
            {
                rightArray[indexRightArray] = array[i];
                indexRightArray++;
            }

            //for (int i = 0; i < rightArray.Length; i++)
            //{
            //    rightArray[i] = array[middle+1 + i];
                
            //}
            Console.WriteLine("==============Right Array==========");
            foreach (int item in rightArray)
            {
                Console.WriteLine(item + " ");
            }
            Console.WriteLine("========================");
            indexLeftArray = 0;
            indexRightArray = 0;
            int arrayIndex = left; //Why arrayIndex = left instead of arrayIndex = 0
            while (indexLeftArray < leftArray.Length && indexRightArray < rightArray.Length)
            {               
                    if (leftArray[indexLeftArray] <= rightArray[indexRightArray])
                    {
                        array[arrayIndex] = leftArray[indexLeftArray];
                        indexLeftArray++;
                        arrayIndex++;
                    }
                    else
                    {
                        array[arrayIndex] = rightArray[indexRightArray];
                        indexRightArray++;
                        arrayIndex++;
                    }
            }
            while (indexLeftArray < leftArray.Length)
            {
                array[arrayIndex] = leftArray[indexLeftArray];
                indexLeftArray++;
                arrayIndex++;
            }
            while (indexRightArray < rightArray.Length)
            {
                array[arrayIndex] = rightArray[indexRightArray];
                indexRightArray++;
                arrayIndex++;
            }
        }
        public void Divide(int left, int right)
        {
            if (left < right)
            {
                int middle = left + (right - left) / 2;
                Divide(left, middle);
                Divide(middle + 1, right);
                Merge(left, right);
            }

        }

    }
}
