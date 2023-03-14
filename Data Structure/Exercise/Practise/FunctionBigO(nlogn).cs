using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Practise
{
    class FunctionBigO_nlogn_
    {
        int number;

        public FunctionBigO_nlogn_(int number)
        {
            this.number = number;
        }
        public void CalculteTheTimeOf_nlogn()
        {
            int count = 0;
            for (int i = 0; i < number; i++)
            {
                for (int j = number; j > 1; j = j / 2)
                {
                    count++;
                }
            }
            Console.WriteLine("The time of Big O(nlogn) is " + count);
        }

    }
}
