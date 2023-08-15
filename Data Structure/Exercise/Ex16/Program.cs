using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ex16
{
    internal class Program
    {
        static void Main(string[] args)
        {


            //****************************************With List**********************
            //Graph graph = new Graph(7);
            //graph.AddEdge(0, 1);
            //graph.AddEdge(0, 2);
            //graph.AddEdge(1, 0);
            //graph.AddEdge(1, 2);
            //graph.AddEdge(1, 3);
            //graph.AddEdge(2, 0);
            //graph.AddEdge(2, 1);
            //graph.AddEdge(2, 4);
            //graph.AddEdge(2, 5);
            //graph.AddEdge(3, 1);
            //graph.AddEdge(3, 4);
            //graph.AddEdge(4, 2);
            //graph.AddEdge(4, 3);
            //graph.AddEdge(4, 5);
            //graph.AddEdge(4, 6);
            //graph.AddEdge(5, 2);
            //graph.AddEdge(5, 4);
            //graph.AddEdge(5, 6);
            //graph.AddEdge(6, 4);
            //graph.AddEdge(6, 5);
            //Console.WriteLine("You want to start from which node? ");
            //int root = Convert.ToInt32(Console.ReadLine());
            //Console.WriteLine("Ok, run begin from root: " + root);
            //graph.BFS(root);
            // Console.WriteLine("\n=========================================================================================\n");

            //// **************************************** With Linked-List **********************

            //Graph_v2_BFS graph_v2 = new Graph_v2_BFS(7);
            //graph_v2.AddEdge(0, 1);
            //graph_v2.AddEdge(0, 2);
            //graph_v2.AddEdge(1, 0);
            //graph_v2.AddEdge(1, 2);
            //graph_v2.AddEdge(1, 3);
            //graph_v2.AddEdge(2, 0);
            //graph_v2.AddEdge(2, 1);
            //graph_v2.AddEdge(2, 4);
            //graph_v2.AddEdge(2, 5);
            //graph_v2.AddEdge(3, 1);
            //graph_v2.AddEdge(3, 4);
            //graph_v2.AddEdge(4, 2);
            //graph_v2.AddEdge(4, 3);
            //graph_v2.AddEdge(4, 5);
            //graph_v2.AddEdge(4, 6);
            //graph_v2.AddEdge(5, 2);
            //graph_v2.AddEdge(5, 4);
            //graph_v2.AddEdge(5, 6);
            //graph_v2.AddEdge(6, 4);
            //graph_v2.AddEdge(6, 5);



            //Console.WriteLine("You want to start from which node? ");
            //root = Convert.ToInt32(Console.ReadLine());
            //Console.WriteLine("Ok, run begin from root: " + root);
            //graph_v2.BFS(root);

            //Console.WriteLine("\n============================================== DFS Traverse ===========================================\n");
            Graph_v3_DFS graph_V3_DFS = new Graph_v3_DFS(7);
            graph_V3_DFS.AddEdge(0, 1);
            graph_V3_DFS.AddEdge(0, 2);
            graph_V3_DFS.AddEdge(1, 0);
            graph_V3_DFS.AddEdge(1, 2);
            graph_V3_DFS.AddEdge(1, 3);
            graph_V3_DFS.AddEdge(2, 0);
            graph_V3_DFS.AddEdge(2, 1);
            graph_V3_DFS.AddEdge(2, 4);
            graph_V3_DFS.AddEdge(2, 5);
            graph_V3_DFS.AddEdge(3, 1);
            graph_V3_DFS.AddEdge(3, 4);
            graph_V3_DFS.AddEdge(4, 2);
            graph_V3_DFS.AddEdge(4, 3);
            graph_V3_DFS.AddEdge(4, 5);
            graph_V3_DFS.AddEdge(4, 6);
            graph_V3_DFS.AddEdge(5, 2);
            graph_V3_DFS.AddEdge(5, 4);
            graph_V3_DFS.AddEdge(5, 6);
            graph_V3_DFS.AddEdge(6, 4);
            graph_V3_DFS.AddEdge(6, 5);



            Console.WriteLine("You want to start from which vertex for DFS? ");
            int vertex = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Ok, run begin from root: " + vertex);
            graph_V3_DFS.DFS(vertex);

            Console.WriteLine("The counter is: " + graph_V3_DFS.counter);
            Console.ReadKey();
            
        }
    }
}
