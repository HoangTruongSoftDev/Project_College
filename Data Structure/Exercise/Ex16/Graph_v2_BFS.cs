using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ex16
{
    class Graph_v2_BFS
    {
        int V;
        LinkedList<int>[] adj;
        public Graph_v2_BFS(int v)
        {
            this.V = v;
            adj = new LinkedList<int>[V];
            for (int i = 0;i < V; i++) 
            {
                adj[i] = new LinkedList<int>();
            }
        }
        public void AddEdge(int v, int w) 
        {
            adj[v].AddLast(w);
        }
        public void BFS(int s)
        {
            bool[] visited = new bool[V];
            Queue<int> queue = new Queue<int>();
            visited[s] = true;
            queue.Enqueue(s);
            while (queue.Count != 0) 
            {
                s = queue.Dequeue();
                Console.Write(s + " ");
                foreach (int i in adj[s]) 
                {
                    if (!visited[i])
                    {
                        visited[i] = true;
                        queue.Enqueue(i);
                    }
                }
            }
        }
    }
}
