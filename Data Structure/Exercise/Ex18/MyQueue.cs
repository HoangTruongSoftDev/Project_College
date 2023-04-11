using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ex18
{
    class MyQueue
    {
        int front;
        int rear;
        Queue<int> queue = new Queue<int>();
        public MyQueue(Queue<int> queue) 
        {
            front = -1;
            rear = -1;
            this.queue = queue;
        }

        public void AddItem(int item) //Enqueue
        {
            queue.Enqueue(item);
        }

        public void RemoveItem() 
        {
            Console.WriteLine(queue.Dequeue());          
        }
    }
}
