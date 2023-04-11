using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SD4_Ballanced_Tree
{
    class Program
    {
        static void Main(string[] args)
        {
            //LNode head = new LNode(1);
            //head.next = new LNode(2);
            //head.next.next = new LNode(4);
            //head.next.next.next = new LNode(8);
            //head.next.next.next.next = new LNode(16);
            //head.next.next.next.next.next = new LNode(32);
            //head.next.next.next.next.next.next = new LNode(64);

            //List<int>listInt = new List<int>() { 1,2,4,8,16,32,64};

            //Console.WriteLine("The given list is:");
            //MainClass mc = new MainClass();
            ////mc.printList(head);
            //TNode tnode = mc.sorteddListToBST(listInt,0,listInt.Count-1);
            //mc.PreOrder(tnode);
            //Console.WriteLine();

            BST tree = new BST();
            Console.Write("How many items would line to enter: ");
            int n = Convert.ToInt32(Console.ReadLine());
            for (int i = 0; i < n; i++)
            {
                Console.Write("Please enter item " + i + " : ");
                int item = Convert.ToInt32(Console.ReadLine());
                tree.insert(item);
            }
            Console.Write("What is your desired value: ");
            int desired = Convert.ToInt32(Console.ReadLine());

            bool run = tree.isPairPresent(tree.root, tree.root, desired);
            if (!run)
                Console.WriteLine("OOps....No such vales are found!");
            Console.ReadKey();
        }
    }
}
