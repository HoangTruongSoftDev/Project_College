using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ex25
{
    internal class Node
    {
        public int root;
        public Node left, right;

        public Node(int root)
        {
            this.root = root; 
            left = right = null;
        }
    }
}
