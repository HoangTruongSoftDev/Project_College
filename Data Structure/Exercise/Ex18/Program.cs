using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ex18
{
    internal class Program
    {
        static void Main(string[] args)
        {
            #region
            Queue<int> newQueue = new Queue<int>();
            //MyQueue myQueue = new MyQueue(newQueue);
            //myQueue.AddItem(10);
            //myQueue.AddItem(5);
            //myQueue.AddItem(-2);
            //Console.WriteLine("This is end of Queue");
            //Console.WriteLine("===========================================");
            //myQueue.RemoveItem();

            Console.WriteLine("===========================================");
            newQueue.Enqueue(10);
            newQueue.Enqueue(5);
            newQueue.Enqueue(-2);
            Console.WriteLine("This is end of Queue");
            Console.WriteLine("===========================================");
            //Console.WriteLine(newQueue.Dequeue());
            //Console.WriteLine(newQueue.Dequeue());
            //Console.WriteLine(newQueue.Dequeue());

            int[] array = newQueue.ToArray();
            Console.WriteLine("===========================================");

            #endregion
            Queue<int> newQueue1 = new Queue<int>(8);
            for (int i = 0; i < 8; i++)
            {
                newQueue1.Enqueue( 4 - i);
            }
            int[] array1 = newQueue1.ToArray();
            int max = newQueue1.ToArray()[0];
            Console.WriteLine("Print the Queue");
            foreach (int i in array1)
            {
                Console.WriteLine(i);
            }
            foreach (int number in newQueue1) 
            {
                if (number >= max)
                {
                    max = number;
                }
            }
            Console.WriteLine("The max of Queue: " +  max);

            int[] array2 = { 100, 232, 32, 533, -32, 232, 16, -399 };
            max = array2[0];
            foreach (int number in array2)
            {
                if (number >= max)
                {
                    max = number;
                }
            }
            Console.WriteLine("The max of Array: " + max);

            int[] array3 = newQueue1.ToArray();
            
            Console.ReadKey();
        }
    }
}
