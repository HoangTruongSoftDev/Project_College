using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ex21
{
    internal class TNode
    {
        public int data;
        public TNode left, right;

        public TNode(int d)
        {
            data = d;
            left = right = null;
        }
    }
}
