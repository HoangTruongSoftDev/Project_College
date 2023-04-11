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
                    Console.WriteLine(item);
                    string line;
                    StreamReader file = new StreamReader(item);
                    while ((line = file.ReadLine()) != null)
                     Console.WriteLine(line); 
                    file.Close();
                }
            }
            Console.ReadKey();
        }
    }
}
