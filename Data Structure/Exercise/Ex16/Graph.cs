using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ex16
{
    // BFS
    class Graph
    {
        int V; //number of vertices
        List<int>[] adj; // adj == adjacency list
        public Graph(int V) 
        {
            this.V = V;
            adj = new List<int>[V];
            for (int i = 0; i < V; i++)
            {
                adj[i] = new List<int>();
            }
        }
        public void AddEdge(int v, int w)
        {
            adj[v].Add(w);
        }
        public void BFS(int s)
        {
            // This is the list of vertices which have been visited before
            bool[] visited = new bool[V];
            Queue<int> queue = new Queue<int>(); // first in first out
            visited[s] = true;
            queue.Enqueue(s); //add to the Queue
            while (queue.Count != 0)
            {
                s = queue.Dequeue(); // remove the last inserted object
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
