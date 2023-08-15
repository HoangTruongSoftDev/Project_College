using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ex26
{
    class WeightedGraph
    {
        public int V; // number of vertices
        public List<(int, int)>[] adj;
        public WeightedGraph(int V) 
        {
            this.V = V;
            adj = new List<(int, int)>[V];
            for (int i = 0; i < V; i++)
            {
                adj[i] = new List<(int, int)>();
            }
        }

        public void AddEdge(int u, int v, int weight)
        {
            adj[u].Add((v, weight));
            adj[v].Add((u, weight));
        }

        public List<int> Dijkstra(int src, int destination)
        {
            // src is the start 
            int[] dist = new int[V];
            int[] prev = new int[V];
            bool[] visited = new bool[V];

            for (int i = 0; i < V; i++)
            {
                dist[i] = int.MaxValue;
                prev[i] = -1;
            }

            dist[src] = 0;
            for (int i = 0; i<V; i++)
            {
                int u = -1;
                int minDist = int.MaxValue;
                for (int j = 0; j < V; j++) 
                {
                    if (!visited[j] && dist[j] < minDist)
                    {
                        u = j;
                        minDist = dist[j];
                    }
                }
                visited[u] = true; 
                foreach (var edge in adj[u])
                {
                    int v = edge.Item1;
                    int weight = edge.Item2;
                    int alt = dist[u] + weight;
                    if (alt < dist[v])
                    {
                        dist[v] = alt;
                        prev[v] = u;
                    }
                }
            }
            List<int> path = new List<int>();
            int curr = destination;
            while (curr != -1)
            {
                path.Insert(0, curr);
                curr = prev[curr];
            }
            if (path.Count > 1 && path[0] == src)
            {
                return path;
            }
            else
            {
                return null;
            }
        }

    }
}
