using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ex14
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int[] array = {1,5,7,9,100,2,6,8,999,44,66,33 };
            TimSort sort = new TimSort(array);
            Console.WriteLine(sort);
        }
    }
}
