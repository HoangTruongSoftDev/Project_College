using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ex20
{
    internal class Program
    {
        static void Main(string[] args)
        {
            LNode head = new LNode(1);
            head.next = new LNode(2);
            head.next.next = new LNode(4);
            head.next.next.next = new LNode(8);
            head.next.next.next.next = new LNode(16);
            head.next.next.next.next.next = new LNode(32);
            head.next.next.next.next.next.next = new LNode(64);

            Console.WriteLine("The Given List is: ");
            MainClass mc = new MainClass();
            mc.printList(head);
            Console.ReadKey();
        }
    }
}
