using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ex22
{
    internal class Program
    {
        static void Main(string[] args)
        {
            /*BST tree = new BST();
            tree.insert(12);
            tree.insert(8);
            tree.insert(5);
            tree.insert(11);
            tree.insert(23);
            tree.insert(16);
            tree.insert(35);
            bool test = tree.isPairPresent(tree.root, tree.root,11);
            Console.ReadKey();*/

            BST tree = new BST();
            Console.Write("How many items would line to enter: ");
            int n = Convert.ToInt32(Console.ReadLine());
            for (int i = 0; i < n; i++)
            {
                Console.Write("Please enter item " + i + " : ");
                int item = Convert.ToInt32(Console.ReadLine());
                tree.insert(item);
            }
            Console.Write("What is your desired value: ");
            int desired = Convert.ToInt32(Console.ReadLine());

            bool run = tree.isPairPresent(tree.root, tree.root, desired);
            if (!run)
                Console.WriteLine("OOps....No such vales are found!");

            Console.ReadKey();
        }
    }
}
