using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Project_Data_Structure_Application
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //string expression = "1+2*4-7/3*(6-1)%3";
            string expression = "5+(6+)7+7";
            Binary_Tree tree = new Binary_Tree();
            Console.WriteLine("The math equaltion is: " + expression);
            Console.WriteLine("Begin");
            tree.root = tree.ConvertMathExpressionToBinaryTree(expression);          
            Console.WriteLine("End");
            Console.WriteLine("Print the tree");
            tree.PrintInOrder(tree.root);
            Console.ReadKey();

        }
    }
}
