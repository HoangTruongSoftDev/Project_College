using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SD4_Ballanced_Tree
{
    // This is the binary tree node
    class TNode
    {
        public int data;
        public TNode left, right;
        public TNode(int data) {
            this.data = data;
            this.left = this.right = null;
        }
    }
   
}
