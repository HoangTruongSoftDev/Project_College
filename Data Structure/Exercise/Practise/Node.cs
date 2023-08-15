using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Practise
{
    public class Node
    {
        //this is used for binary tree algorithm 

        //public Node left;
        //public Node right;
        //public char data;
        //public Node(char data) 
        //{
        //    this.data = data;
        //    this.left = this.right = null;
        //}

        public Node left;
        public Node right;
        public int data;
        public Node(int data)
        {
            this.data = data;
            this.left = this.right = null;
        }

    }
}
