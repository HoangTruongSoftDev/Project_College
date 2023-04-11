using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace Ex21
{
    class RandomTree
    {
        

        public void InOrder(TNode root)
        {
            // Print the node only not print the leaf
            /* 
             * if (root == null) return;
            InOrder(root.left);
            if (root.left != null || root.right != null)
            {              
                Console.Write(root.data + " ");               
            }
            InOrder(root.right);
            */

            // Print all the vertices

            if (root == null) return;
            InOrder(root.left);
            Console.WriteLine(root.data + " ");
            InOrder(root.right);
        }


    }
}
