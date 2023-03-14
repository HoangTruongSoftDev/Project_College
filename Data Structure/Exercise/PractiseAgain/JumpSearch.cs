using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PractiseAgain
{
    internal class JumpSearch
    {
        int[] array;
        public JumpSearch(int[] array)
        {
            this.array = array;
        }   


        public void Search(int number, int left, int right, int chunkSize)
        {
            int jump = chunkSize + left;
            if (chunkSize > array.Length)
            {
                chunkSize = array.Length;
            }
            if (array[jump - 1] < number)
            {
                Search(number, jump, right, chunkSize);
            }
            else if (array[jump - 1] > number)
            {
                bool found = true;
                for (int i = left;i < jump;i++) 
                {
                    if (array[i] == number)
                    {
                        Console.WriteLine("Found at first loop");
                        found = true;
                        break;
                    }

                }
                if (!found)
                {
                    Console.WriteLine("Not found");
                }
            }
            else
            {
                Console.WriteLine("Found at second loop");
            }

        }
    }
}
