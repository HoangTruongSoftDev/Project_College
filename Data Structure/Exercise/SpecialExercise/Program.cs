using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SpecialExercise
{
    internal class Program
    {
        static void Main(string[] args)
        {
            NestedLoop(6,4);
            Console.ReadKey();
        }

        static void NestedLoop(int m, int n)
        {
            int count = 0;
            for(int i = 0; i < n; i++)
            {
                for (int j = i; j < n; j++)
                {
                    Console.Write(j + " ");
                    count++;
                }
                Console.WriteLine();
            }
                
            Console.WriteLine(count);

        }
        
    }
    
}
