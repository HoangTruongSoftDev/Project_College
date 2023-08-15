using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ex22
{
    internal class BST
    {
        public Node root;
        public BST() { this.root = null; }
        // Create binary search tree
        public Node insertRecord(Node root, int data)
        {
            if (root == null)
            {
                root = new Node(data);
                return root;
            }
            if (data < root.data)
            {
                root.left = insertRecord(root.left, data);
            }
            else if (data > root.data)
            {
                root.right = insertRecord(root.right, data);
            }
            return root;
        }
        public void insert(int key)
        {
            root = insertRecord(root, key);
        }

        // Search to find the pair of node that add together to equal the target
        public bool isPairPresent(Node root, Node temp, int target)
        {
            if (temp == null)
            {
                return false;
            }
            return search(root, temp, target - temp.data) || isPairPresent(root, temp.left, target) || isPairPresent(root, temp.right, target);
        }
        public bool search(Node root, Node temp, int k)
        {
            if (root == null) return false;
            Node c = root;
            bool flag = false;
            while (c != null && flag != true)
            {
                if (c.data == k && temp != c)
                {
                    flag = true;
                    Console.WriteLine("Pair Found " + c.data + " + " + temp.data);
                    return true;
                }

                else if (k < c.data) c = c.left;
                else c = c.right;
            }
            return false;
        }
        

    }
}
