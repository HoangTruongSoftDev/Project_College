using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ex9
{
    class Program
    {
        static void PrintPatternTop(int n)
        {
            if (n == 0) return;
            for (int i = 0; i <n; i++)
            {
                
                Console.Write("* ");
            }
            Console.WriteLine();
            PrintPatternTop(n - 1);
        }
        static void PrintPatterFinal(int n)
        {
            if (n == 0)return;
            Console.Write("* ");
            PrintPatterFinal(n - 1);
        }

        static void printProtocole(int n, int i)
        {
            if (n == 0) return;
            PrintPatterFinal(i);
            Console.WriteLine();
            printProtocole(n-1, i + 1);
        }
        static void PrintPatternDown(int n,string star)
        {
            if (n == 0) return;
            star = star + "* ";
            Console.WriteLine(star);
            PrintPatternDown(n-1,star);
        }
        #region teacher's method
        static void printStarOnly(int stars)
        {
            if (stars == 0)
            {
                return;
            }
            Console.Write("* ");
            printStarOnly(stars-1);
        }
        static void patternStar(int n1, int n2)
        {
            if (n1 == 1)
            {
                return;
            }
            // we need a method to printing
            printStarOnly(n1);
            printSpaceOnly(2 * (n2 - n1) + 1);
            printSpaceOnly(n1);
            Console.Write("\n");


        }
        static void printSpaceOnly(int space)
        {
            if (space == 0)
            {
                return;
            }
            Console.Write(" ");
            Console.Write(" ");
            printStarOnly(space - 1);
        }
        #endregion

        static void Main(string[] args)
        {
            Console.WriteLine("PLease enter the line: ");
            int n = Convert.ToInt32(Console.ReadLine());
            //PrintPatternDown(n,"");
            printProtocole(n, 1);
            Console.ReadKey();

        }
    }
}
