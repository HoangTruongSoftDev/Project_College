using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ex20
{
    internal class TNode
    {
        public int data;
        public TNode left, right;
        public TNode(int data)
        {
            this.data = data;
            this.left = this.right = null;
        }
    }
}
