using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Practise
{

    internal class Program
    {
        public static void PrintArray(int[] array)
        {
            foreach (int element in array)
            {
                Console.Write(element + " ");
            }
        }
         
       
        static void Main(string[] args)
        {
            #region Binary Search - Big O(logn)
            //int[] array = { 3, 4, 5, 7, 8, 9, 11, 22, 100, 99, 16, 28, 78, 54 };
            //BinarySearch br = new BinarySearch(array);
            //br.Search(78, 0, array.Length - 1);
            #endregion
            #region Jump Search - Big O(logn)
            //int[] array = { 2,3,8,9,11,22,35,64,78,90 };
            //JumpSearch br = new JumpSearch(array);
            //br.jump_Search(11,0,Convert.ToInt32(Math.Sqrt(array.Length)));
            #endregion

            #region Insertion Sort - Big O(n^2)
            //int[] array = { 2, 3, 11, 1, 5, 88, 75, 43, 100, 31, 24, 16 };
            //Insertion_sort insertion_Sort = new Insertion_sort(array);
            //insertion_Sort.insertionSort(0, 1);
            //PrintArray(array);
            #endregion

            #region Selection Sort - Big O(n^2)
            //int[] array = { 69, 7, 2, 4, 9, 8, 99, 73, 12, 64 };
            //SelectionSort selectionSort = new SelectionSort(array);
            //selectionSort.Selection_Sort(0);
            //PrintArray(array);
            #endregion

            #region Quick Sort - Big O (n^2)
            //int[] array = { 69, 7, 2, 4, 9, 8, 99, 73, 12, 64 };
            //QuickSort quickSort = new QuickSort(array);
            //quickSort.Sort(0, array.Length - 1);
            //PrintArray(array);
            #endregion

            #region Merge Sort  - Big O (n*logn)
            //int[] array = { 69, 7, 2, 4, 9, 8, 99, 73, 12, 64,100,500,300,234,65,432 };
            //MergeSort mergeSort = new MergeSort(array);
            //mergeSort.Divide(0, array.Length - 1);
            //PrintArray(array);

            #endregion

            #region Square Root 
            //SquareRoot squareRoot = new SquareRoot();
            //double sqrt = squareRoot.Sqrt(5.0, 1.0);
            //Console.WriteLine("Square root is: " + sqrt);5
            #endregion

            #region Complextity - Big O (n*(n+1)/2 + (m-n)*n)
            //Console.Write("Please enter n: ");
            //int n = Convert.ToInt32(Console.ReadLine());
            //Console.Write("Please enter m: ");
            //int m = Convert.ToInt32(Console.ReadLine());
            //ComputationalComplexity computationalComplexity = new ComputationalComplexity(m, n);
            //computationalComplexity.NestedLoop(m, n);
            #endregion

            #region Bubble Sort - Big O (n^2)
            //int[] array = { 69, 7, 2, 4, 9, 8, 99, 73, 12, 64, 100, 500, 300, 234, 65, 432 };
            //BubbleSort bubbleSort = new BubbleSort(array);
            //bubbleSort.Sort();
            //PrintArray(array);
            #endregion


            #region Write any function has the complexity is O(nlogn)
            //Console.Write("Enter your n: ");
            //int n = Convert.ToInt32(Console.ReadLine());
            //FunctionBigO_nlogn_ bigO = new FunctionBigO_nlogn_(n);
            //bigO.CalculteTheTimeOf_nlogn();
            #endregion

            #region Tim Sort O(n*logn)
            //int[] array = { 100, 55, 22, 10, 1, 8, 9, 23, 56, 78, 19, 15, 98, 50, 67, 42 };
            //TimSort timSort = new TimSort(array);
            //timSort.Sort();
            //PrintArray(array);

            #endregion

            #region Heap Sort O(n*logn)
            //int[] array = { 100, 55, 22, 10, 1, 8, 9, 23, 56, 78, 19, 15, 98, 50, 67, 42 };
            //HeapSort heapSort = new HeapSort(array);
            //heapSort.Sort();
            //PrintArray(array);
            #endregion

            #region Graph BFS O(n^2): n is vertex
            //Graph_BFS graph = new Graph_BFS(7);
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
            #endregion

            #region DFS O(n^2): n is vertex
            //Graph_DFS graph_V3_DFS = new Graph_DFS(7);
            //graph_V3_DFS.AddEdge(0, 1);
            //graph_V3_DFS.AddEdge(0, 2);
            //graph_V3_DFS.AddEdge(1, 0);
            //graph_V3_DFS.AddEdge(1, 2);
            //graph_V3_DFS.AddEdge(1, 3);
            //graph_V3_DFS.AddEdge(2, 0);
            //graph_V3_DFS.AddEdge(2, 1);
            //graph_V3_DFS.AddEdge(2, 4);
            //graph_V3_DFS.AddEdge(2, 5);
            //graph_V3_DFS.AddEdge(3, 1);
            //graph_V3_DFS.AddEdge(3, 4);
            //graph_V3_DFS.AddEdge(4, 2);
            //graph_V3_DFS.AddEdge(4, 3);
            //graph_V3_DFS.AddEdge(4, 5);
            //graph_V3_DFS.AddEdge(4, 6);
            //graph_V3_DFS.AddEdge(5, 2);
            //graph_V3_DFS.AddEdge(5, 4);
            //graph_V3_DFS.AddEdge(5, 6);
            //graph_V3_DFS.AddEdge(6, 4);
            //graph_V3_DFS.AddEdge(6, 5);



            //Console.WriteLine("You want to start from which vertex for DFS? ");
            //int vertex = Convert.ToInt32(Console.ReadLine());
            //Console.WriteLine("Ok, run begin from root: " + vertex);
            //graph_V3_DFS.DFS(vertex);

            #endregion

            #region Binary Tree 
            //BinaryTree tree = new BinaryTree();
            ///*tree.root = new Vertex('A');
            //tree.root.left = new Vertex('B');
            //tree.root.right = new Vertex('C');
            //tree.root.left.left = new Vertex('D');
            //tree.root.left.right = new Vertex('E');*/

            //tree.root = new Node('8');
            //tree.root.left = new Node('4');
            //tree.root.left.left = new Node('2');
            //tree.root.left.left.left = new Node('1');
            //tree.root.right = new Node('B');
            //tree.root.right.right = new Node('C');
            //tree.root.right.right.right = new Node('D');


            //Console.WriteLine("\nPostOrder traversal of the given Binary Tree is: ");
            //tree.PrintPostOrder(tree.root);

            //Console.WriteLine("\nInOrder traversal of the given Binary Tree is: ");
            //tree.PrintInOrder(tree.root);

            //Console.WriteLine("\nPreOrder traversal of the given Binary Tree is: ");
            //tree.PrintPreOrder(tree.root);
            #endregion

            #region Binary Search Tree used to find to pair of node that their sum is equal to target O(logn)
            //BST tree = new BST();
            //tree.insert(12);
            //tree.insert(8);
            //tree.insert(5);
            //tree.insert(11);
            //tree.insert(23);
            //tree.insert(16);
            //tree.insert(35);
            //// the target is 17
            //bool test = tree.isPairPresent(tree.root, tree.root, 17);
            //if (!test)
            //    Console.WriteLine("OOps....No such vales are found!");
            #endregion

            #region Check the tree is Full Tree or not
            
            Node tree = new Node(10);

            tree.left = new Node(5);
            tree.right = new Node(-2);
            tree.left.left = new Node(7);
            tree.left.right = new Node(7);
            tree.right.left = new Node(7);
            tree.right.right = new Node(7);
            Full_Tree fullTree = new Full_Tree(tree);
            if (fullTree.isFull(fullTree.root))
            {
                Console.WriteLine("Full Tree");
            }
            else
            {
                Console.WriteLine("Not Full Tree");
            }
            #endregion


            Console.ReadKey();
        }
    }
}
