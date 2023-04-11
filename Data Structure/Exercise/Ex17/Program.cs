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
            /*tree.root = new Vertex('A');
            tree.root.left = new Vertex('B');
            tree.root.right = new Vertex('C');
            tree.root.left.left = new Vertex('D');
            tree.root.left.right = new Vertex('E');*/

            tree.root = new Vertex('8');
            tree.root.left = new Vertex('4');
            tree.root.left.left = new Vertex('2');
            tree.root.left.left.left = new Vertex('1');
            tree.root.right = new Vertex('B');
            tree.root.right.right = new Vertex('C');
            tree.root.right.right.right = new Vertex('D');


            Console.WriteLine("\nPostOrder traversal of the given Binary Tree is: ");
            tree.PrintPostOrder(tree.root);

            Console.WriteLine("\nInOrder traversal of the given Binary Tree is: ");
            tree.PrintInOrder(tree.root);

            Console.WriteLine("\nPreOrder traversal of the given Binary Tree is: ");
            tree.PrintPreOrder(tree.root);

            

           


            Console.ReadKey();
        }
    }
}
