using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Project_Data_Structure_Application
{
    [Serializable]
    public class Node
    {
        public string data;
        public Node left;
        public Node right;

        public Node(string data)
        {
            this.Data = data;
            Left = null;
            Right = null;
        }

        public Node Left { get => left; set => left = value; }
        public Node Right { get => right; set => right = value; }
        public string Data { get => data; set => data = value; }

    }
}
