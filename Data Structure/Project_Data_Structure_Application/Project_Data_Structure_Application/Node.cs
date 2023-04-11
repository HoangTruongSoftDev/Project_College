using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Project_Data_Structure_Application
{
    internal class Node
    {
        public string data;
        public Node left, right;
        public Node(string data)
        {
            this.data = data;
            left = null;
            right = null;
        }

    }
}
