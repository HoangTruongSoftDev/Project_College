using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace Ex20
{
    class MainClass
    {
        public void printList(LNode node)
        {
            while (node != null)
            {
                Console.Write(node.data + " ");
                node = node.next;
            }
        }
        public void PreOrder(TNode root)
        {
            if (root == null)
            {
                return;
            }
            Console.Write(root.data + " ");
            PreOrder(root.left);
            PreOrder(root.right);
        }
        public TNode sortedListToBST(List<int> vec, int start, int end)
        {
            if (start > end)
            {
                return null;
            }
            int mid = start + (end - start) / 2;
            if ((end - start) % 2 != 0)
            {
                mid = mid + 1;
            }
            TNode root = new TNode(vec[mid]);
            root.left = sortedListToBST(vec, start, mid - 1);
            root.right = sortedListToBST(vec, mid + 1, end);
            return root;
        }
    }
}
