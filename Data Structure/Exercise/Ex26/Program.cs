using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ex26
{
    internal class Program
    {
        static void Main(string[] args)
        {
            WeightedGraph graph = new WeightedGraph(6);
            graph.AddEdge(0, 1, 8);
            graph.AddEdge(0, 4, 15);
            graph.AddEdge(1, 2, 6);
            graph.AddEdge(1, 4, 17);
            graph.AddEdge(2, 3, 6);
            graph.AddEdge(3, 4, 9);
            graph.AddEdge(4, 2, 11);
            graph.AddEdge(5, 1, 16);

            List<int> path = graph.Dijkstra(0, 3);
            if (path != null)
            {
                Console.WriteLine("Voilla, the optimal path from 0 to 3: " );
                Console.WriteLine(string.Join(" -> ", path));
                //for (int i = 0; i < path.Count; i++)
                //{
                //    Console.WriteLine(path[i]+ " ");
                //}
            }
            Console.ReadKey();
        }
    }
}
