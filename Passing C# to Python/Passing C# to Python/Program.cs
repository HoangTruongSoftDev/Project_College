using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Passing_C__to_Python
{
    internal class Program
    {
        static void Main(string[] args)
        {
            ProcessStartInfo start = new ProcessStartInfo();
            start.FileName = "\"C:\\Program Files (x86)\\Microsoft Visual Studio\\Shared\\Python39_64\\python.exe\"";
            string pythonPath = "\"C:\\Truong\\Lasalle College\\Programming Feature\\Project_College\\Passing C# to Python\\PassedFromC#\\PassedFromC_.py\"";
            int num1 = 5;
            int num2 = 6;
            // pass these to your Arguements property of your ProcessStartInfo instance
            start.Arguments = string.Format("{0} {1} {2}", pythonPath, num1, num2);
            start.UseShellExecute = false;
            start.RedirectStandardInput = true;

            //this way will print back to C# console
            //using (Process process = Process.Start(start))
            //{
            //    using (StreamReader reader = process.StandardOutput)
            //    {
            //        string result = reader.ReadToEnd();
            //        // this prints 11
            //        Console.Write(result);

            //    }
            //}

            // this way will print in the Python Console
            Process process = new Process();
            process.StartInfo = start;
            process.Start();

            
            StreamWriter writer = process.StandardInput;
            writer.WriteLine("Hello, Python!");
            process.WaitForExit();
            Console.ReadKey();
        }
    }
}
