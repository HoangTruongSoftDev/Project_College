using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;

namespace Practise
{
    class BinaryTree
    {
        public Node root;
        public BinaryTree()
        {
            this.root = null;
        }

        public void PrintPreOrder(Node node)
        {
            if (node == null) { return; }
            Console.Write(node.data + " ");
            PrintPreOrder(node.left);
            PrintPreOrder(node.right);
        }
        public void PrintInOrder(Node node)
        {
            if (node == null) { return; }

            PrintInOrder(node.left);
            Console.Write(node.data + " ");
            PrintInOrder(node.right);
        }
        public void PrintPostOrder(Node node)
        {
            if (node == null) { return; }
            
            PrintPostOrder(node.left);
            PrintPostOrder(node.right);
            Console.Write(node.data + " ");
        }
    }
}
