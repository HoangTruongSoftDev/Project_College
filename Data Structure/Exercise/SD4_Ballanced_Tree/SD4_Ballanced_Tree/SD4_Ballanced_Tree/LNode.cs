using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SD4_Ballanced_Tree
{
    // This is the likned list Node
    class LNode
    {
        public int data;
        public LNode next;
        public LNode(int data) {
            this.data = data;
            this.next = null;
        }
    }
}
