using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ex16
{
    class Graph_v3_DFS
    {
        int V;
        List<int>[] adj;
        public Graph_v3_DFS(int V)
        {
            this.V = V;
            adj = new List<int>[V];
            for(int i = 0; i < V; i++)
            {
                adj[i] = new List<int>();
            }
        }
        public void AddEdge(int v, int w)
        {
            adj[v].Add(w);
        }
        public void ControlOverVisitedVertices(int v, bool[] visited)
        {
            visited[v] = true;
            Console.Write(v + " ");
            List<int> vList = adj[v];
            foreach(var i in vList) 
            {
                if (!visited[i])
                {
                    ControlOverVisitedVertices(i, visited);
                }
            }
        }
        public void DFS(int v)
        {
            bool[] visited = new bool[V];
            ControlOverVisitedVertices(v, visited);
        }
    }
}
