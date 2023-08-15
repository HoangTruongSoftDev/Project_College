using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Practise
{
    internal class Full_Tree
    {
        public Node root;
        public Full_Tree(Node root) 
        {
            this.root = root;
        }
        public bool isFull(Node root)
        {
            if (root==null)
            {
                return true;
            }
            if (root.left == null && root.right==null)
            {
                return true;
            }
            if(root.left != null && root.right!=null)
            {
                if (isFull(root.left) && isFull(root.right))
                {
                    return true;
                }
            }
            return false;
        }
    }
}
