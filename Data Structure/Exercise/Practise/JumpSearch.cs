using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Practise
{
    class JumpSearch
    {
        int[] array;
        public JumpSearch(int[] array)
        {
            this.array = array;
        }
        public void jump_Search(int searchNum, int left, int chunkSize)
        {           
            int jump = left+chunkSize;
            if (jump > array.Length)
            {
                jump = array.Length;
            }

            if (searchNum > array[jump - 1])
            {
                jump_Search(searchNum, left + chunkSize, chunkSize);
            }
            
            else if (searchNum < array[jump - 1])
            {
                for (int i = left; i < jump; i++)
                {
                    
                    if (array[i] == searchNum)
                    {
                        Console.WriteLine("1) Found at index: " + i);
                        return;
                    }
                }
                Console.WriteLine("Can't find the number");
            }
            else
            {
                Console.WriteLine("2) Found at index: " + (jump - 1));
                return;
            }


        }
    }
}
