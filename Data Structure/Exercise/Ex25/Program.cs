using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ex25
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Node tree = new Node(10);

            tree.left = new Node(5);
            tree.right = new Node(-2);
            tree.left.left = new Node(7);
            tree.left.right = new Node(7);
            tree.right.left = new Node(7);
            tree.right.right = new Node(7);
            FullTree fullTree = new FullTree(tree);
            if (fullTree.isFull(tree))
            {
                Console.WriteLine("This is the Full Tree");
            }
            else
            {
                Console.WriteLine("This is NOT a Full Tree");
            }
            Console.ReadKey();
        }
    }
}
