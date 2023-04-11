using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ex21
{
    internal class Program
    {
        static void Main(string[] args)
        {
            TNode head = new TNode(1);
            head.left = new TNode(2);
            head.right = new TNode(3);
            head.left.left = new TNode(4);
            head.right.left = new TNode(5);
            head.right.right = new TNode(6);
            head.right.left.right = new TNode(7);

            Console.WriteLine("The Given List is: ");
            RandomTree mc = new RandomTree();
            mc.InOrder(head);
            Console.ReadKey();
        }
    }
}
