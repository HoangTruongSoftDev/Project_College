using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Runtime.Serialization.Formatters.Binary;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using System.Collections;

namespace Project_Data_Structure_Application
{
    internal class Program
    {
        static void Main(string[] args)
        {


            //string expression = "11.2+2*4-7/3*(6-1)%3.54+343*5";
            //string expression = "1+2*4-7/3+(6-1)%3";
            string expression = "(7*2)*3/4+8/2*3*(1-3%2)";
           
            Binary_Tree tree = new Binary_Tree();
            Console.WriteLine("The math equaltion is: " + expression);
            Console.WriteLine("Begin");
            tree.root = tree.ConvertMathExpressionToBinaryTree(expression);           
            Console.WriteLine("End");
            Console.WriteLine("Print the tree");
            tree.PrintInOrder(tree.root);           

            //string jsonString = JsonConvert.SerializeObject(tree.root);
            //File.WriteAllText(@"C:\Truong\Lasalle College\Programming Feature\Project_College\Data Structure\Project_Data_Structure_Application\file.json", jsonString);
            //ProcessStartInfo start = new ProcessStartInfo();

            //start.FileName = "C:\\Program Files (x86)\\Microsoft Visual Studio\\Shared\\Python39_64\\python.exe";
            //string pythonPath = "\"C:\\Truong\\Lasalle College\\Programming Feature\\Project_College\\Data Structure\\Project_Data_Structure_Application\\Illustate the Binary Tree\\Illustate_the_Binary_Tree.py\"";
            //start.Arguments = string.Format("{0}", pythonPath);
            //start.UseShellExecute = false;
            //Process process = new Process();
            //process.StartInfo = start;
            //process.Start();

            //process.WaitForExit();
            Console.ReadKey();

        }
    }
}
