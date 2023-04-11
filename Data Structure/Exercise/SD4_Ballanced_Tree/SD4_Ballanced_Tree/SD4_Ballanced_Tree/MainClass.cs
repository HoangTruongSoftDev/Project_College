using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SD4_Ballanced_Tree
{
    class MainClass
    {
        public void printList(LNode node) {
            while (node != null) {
                Console.Write(node.data + " ");
                node = node.next;
            }
        }
        public void PreOrder(TNode root) {
            if (root == null) {
                return;
            }
            Console.Write(root.data + " ");
            PreOrder(root.left);
            
            PreOrder(root.right);
        }
        public TNode sorteddListToBST(List<int> vec, int start, int end) {
            if (start > end) {
                return null;
            }
            int mid = start + (end - start) / 2;
            if ((end - start) % 2 != 0) {
                mid = mid + 1;
            }
            TNode root = new TNode(vec[mid]);
            root.left = sorteddListToBST(vec, start, mid-1);
            root.right = sorteddListToBST(vec, mid + 1, end);
            return root;
        }
    }
}
