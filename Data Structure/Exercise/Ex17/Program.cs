using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ex17
{
    internal class Program
    {
        static void Main(string[] args)
        {
            BinaryTree tree = new BinaryTree();
            tree.root = new Vertex('A');
            tree.root.left = new Vertex('B');
            tree.root.right = new Vertex('C');
            tree.root.left.left = new Vertex('D');
            tree.root.left.right = new Vertex('E');
            Console.WriteLine("PreOrder traversal of the given Binary Tree is: ");
            tree.PrintPreOrder();

            Console.WriteLine("\nInOrder traversal of the given Binary Tree is: ");
            tree.PrintInOrder(tree.root);

            Console.WriteLine("\nPostOrder traversal of the given Binary Tree is: ");
            tree.PrintPostOrder(tree.root);


            Console.ReadKey();
        }
    }
}
