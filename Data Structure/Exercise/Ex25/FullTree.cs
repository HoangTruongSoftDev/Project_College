using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ex25
{
    internal class FullTree
    {
        public Node root;
        public FullTree(Node root) 
        {
            this.root = root;
        }
        public bool isFull(Node node)
        {
            if (node == null)
            {
                return true;
            }
            if (node.left == null && node.right == null)
            {
                return true;
            }
            if (node.left != null && node.right != null)
            {
                return isFull(node.left) && isFull(node.right);
            }
            return false;
        }
    }
}
