using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Schema;

namespace Ex2
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int[] array = new int[] { 12, 99, -18, 101, -6, 267, 118, -9 };
            int max = array[0];
            for (int i = 0; i < array.Length; i++)
            {
                if (array[i] > max)
                {
                    max = array[i];
                }
            }
            Console.WriteLine("Maximum value: " + max);
            Console.ReadKey();
        }
    }
}
