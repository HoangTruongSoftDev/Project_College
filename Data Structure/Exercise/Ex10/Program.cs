using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
/*
  input is: 5

* * * * * * * * * *
* * * *     * * * *
* * *         * * *
* *             * *
*                 *
 
 */
namespace Ex10
{
    class Program
    {
       static int counter = 0;
       
        static void DisplayPattern(int line, int index1, int index2)
        {
            if (counter==line)
            return;
            if (counter == 0)
            {
                for (int i = 0; i < line*2; i++)
                    Console.Write("* ");
                Console.WriteLine();
                counter++;
                DisplayPattern(line,index1,index2+1);
                

            }
            else
            {
                for (int i = 1; i <= 2 * line; i++)
                {
                    if (i >= index1 && i <= index2)
                    {
                        Console.Write("  ");
                    }
                    else
                    {
                        Console.Write("* ");
                    }
                    
                }
                Console.WriteLine();
                counter++;
                DisplayPattern(line,index1 - 1, index2 + 1);
            }
            
        }
        static void Main(string[] args)
        {
            Console.WriteLine("How many lines you want to input? ");
            int line = Convert.ToInt32(Console.ReadLine());
            DisplayPattern(line, line, line);
            Console.ReadKey();
        }
    }
}
