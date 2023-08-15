using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;

namespace Practise
{
    class Graph_DFS
    {
        int V;
        List<int>[] adjacency;
        public Graph_DFS(int V)
        {
            this.V = V;
            this.adjacency = new List<int>[V];
            for (int i = 0; i < V; i++) 
            {
                adjacency[i] = new List<int>();
            }
        }
        public void AddEdge(int v1, int v2)
        {
            adjacency[v1].Add(v2);
        }
        public void DFS(int root)
        {
            bool[] visited = new bool[V];
            CheckVisitedVertex(visited, root);
        }
        public void CheckVisitedVertex(bool[] visited, int metVertex)
        {
            visited[metVertex] = true;
            Console.Write(metVertex + " ");
            foreach (var v in adjacency[metVertex]) 
            {
                if (!visited[v])
                {
                    CheckVisitedVertex(visited, v);
                }
            }
        }
    }
}
