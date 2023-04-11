using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ex17
{
    
    class BinaryTree
    {
        public Vertex root;
        public BinaryTree()
        {
            root = null;
        }

        public void PrintPostOrder(Vertex vertex)
        {
            if (vertex == null)
                return;
            PrintPostOrder(vertex.left);
            PrintPostOrder(vertex.right);
            Console.Write(vertex.key + " ");
        }

        public void PrintInOrder(Vertex vertex)
        {
            if (vertex == null)
                return;
            PrintInOrder(vertex.left);
            Console.Write(vertex.key + " ");

            PrintInOrder(vertex.right);
        }
        public void PrintPreOrder(Vertex vertex)
        {
            if (vertex == null)
                return;
            Console.Write(vertex.key + " ");
            PrintPreOrder(vertex.left);
            PrintPreOrder(vertex.right);
        }
        public void PrintPreOrder()
        {
            PrintPreOrder(root);
        }

        

        
    }


}
