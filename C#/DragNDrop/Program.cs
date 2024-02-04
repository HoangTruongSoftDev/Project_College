using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;

namespace DragNDrop
{
    internal class Program
    {
        static void Main(string[] args)
        {
            if (args.Length >0)
            {
                foreach (var item in args)
                {
                    Console.WriteLine("===================================\n");
                    Console.WriteLine(item);
                    Console.WriteLine("\n===================================");
                    string line;
                    StreamReader file = new StreamReader(item);
                    Console.WriteLine("\n+++++++++++++++++++++++++++++++++++++++++\n");
                    while ((line = file.ReadLine()) != null)
                     Console.WriteLine(line);
                    Console.WriteLine("\n+++++++++++++++++++++++++++++++++++++++++\n");
                    file.Close();
                }
            }
            Console.ReadKey();
        }
    }
}
