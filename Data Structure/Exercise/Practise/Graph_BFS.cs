using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Practise
{
    class Graph_BFS
    {
        int V;
        List<int>[] adjacency;
        public Graph_BFS(int V)
        {
            this.V = V;
            this.adjacency = new List<int>[V];
            for (int i = 0; i<V;i++)
            {
                adjacency[i] = new List<int>();
            }
        }

        public void AddEdge(int v1, int v2)
        {
            adjacency[v1].Add(v2);
        }
        public void BFS(int root)
        {
            bool[] visitedVertex = new bool[V];
            Queue<int> queue = new Queue<int>();
            queue.Enqueue(root);
            visitedVertex[root] = true;
            while (queue.Count > 0)
            {
                int vertex = queue.Dequeue();
                Console.Write(vertex + " ");
                foreach (int v in adjacency[vertex]) 
                {
                    if (!visitedVertex[v]) 
                    { 
                        queue.Enqueue(v);
                        visitedVertex[v] = true;
                    }
                }
            }
        }
    }
}
