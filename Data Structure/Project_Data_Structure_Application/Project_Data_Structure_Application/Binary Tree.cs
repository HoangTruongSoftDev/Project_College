using System;
using System.Collections;
using System.Collections.Generic;
using System.Diagnostics.Eventing.Reader;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Project_Data_Structure_Application
{
    class Binary_Tree
    {
        public Node root;
        public Binary_Tree()
        {
            this.root = null;
        }
        public void PrintInOrder (Node root)
        {
            if (root == null)
            {
                return;
            }
            
            PrintInOrder(root.left);
            Console.Write(root.data + " ");
            PrintInOrder(root.right);
        }
        public int CheckPriority(string token)
        {
            if (token == "*" || token == "/" || token == "%")
            {
                return 3;
            }
            else if (token == "+" || token == "-")
            {
                return 2;
            }
            else if (token == "(" || token == ")")
            {
                return 1;
            }
            return 0;
        }
        public bool IsOperator(string token)
        {
            return token == "+" || token == "-" || token == "*" || token == "/" || token == "%";
        }
        public bool IsOperand(string token)
        {
            return !IsOperator(token) && token != "(" && token != ")";
        }
        public Stack<string> stackOperators = new Stack<string>();
        public Stack<Node> stackNodes = new Stack<Node>();

        public bool CheckValidMathExpression(string mathExpression)
        {
            char[] chars = mathExpression.ToCharArray();
            string[] strings = Array.ConvertAll(chars, eachChar => eachChar.ToString());
            bool checkOperator = false;
            bool checkOperand = false;
            if (IsOperator(strings[0]) || IsOperator(strings[strings.Length-1]))
            {
                Console.WriteLine("It can't be operators at the begin or at the end of the math expression");
                return false;
            }
            foreach (string token in strings)
            {
                Console.WriteLine("Token: " + token);
                if (IsOperator(token) )
                {
                    if (checkOperator)
                    {
                        Console.WriteLine("It can't be 2 operators in a row");
                        return false;
                    }
                    else
                    {
                        checkOperator = true;
                        checkOperand = false;
                    }
                }
                if (IsOperand(token))
                {
                    if (checkOperand)
                    {
                        Console.WriteLine("It can't be 2 operands in a row");
                        return false;
                    }
                    else
                    {
                        checkOperator = false;
                        checkOperand = true;
                    }
                }
            }
            return true;
        }

        public Node ConvertMathExpressionToBinaryTree(string mathExpression)
        {
            /*      (a+b)*c-d/e      */
            if (!CheckValidMathExpression(mathExpression))
            {
                return null;   
            }
            char[] arr = mathExpression.ToCharArray();
            string[] strArr = Array.ConvertAll(arr, c => c.ToString());
            foreach (string token in strArr) 
            {
                Console.WriteLine("The token is: " + token);
                if (IsOperand(token))
                {
                    Console.WriteLine("Get in operand ============");
                    Node nodeOfToken = new Node(token);
                    stackNodes.Push(nodeOfToken);
                    Console.WriteLine("Push operand in stack node. The value of that operand is: " + stackNodes.Peek().data);
                    if (stackNodes.Peek().left != null)
                    {
                        Console.WriteLine("The left of that operand is: " + stackNodes.Peek().left.data);
                    }
                    else
                    {
                        Console.WriteLine("The left of that operand is: " + stackNodes.Peek().left);
                    }
                    if (stackNodes.Peek().right != null)
                    {
                        Console.WriteLine("The right of that operand is: " + stackNodes.Peek().right.data);
                    }
                    else
                    {
                        Console.WriteLine("The right of that operand is: " + stackNodes.Peek());
                    }  
                    Console.WriteLine("End the operand\n\n");
                }
                else if (token == "(")
                {
                    Console.WriteLine("Get in \"(\" ===============");
                    stackOperators.Push(token);
                    Console.WriteLine("Push operand in stack node. The value of that operand is: " + stackOperators.Peek());
                    Console.WriteLine("End the get in \"(\" \n\n");
                }
                else if (token == ")")
                {
                    Console.WriteLine("Get in \")\" =============");
                    while (stackOperators.Peek() != "(") 
                    {
                        Node node = new Node(stackOperators.Pop());
                        node.right = stackNodes.Pop();
                        node.left = stackNodes.Pop();
                        stackNodes.Push(node);
                        
                        Console.WriteLine("Push operand in stack node. The value of that operand is: " + stackNodes.Peek().data);
                        if (stackNodes.Peek().left != null)
                        {
                            Console.WriteLine("The left of that operand is: " + stackNodes.Peek().left.data);
                        }
                        else
                        {
                            Console.WriteLine("The left of that operand is: " + stackNodes.Peek().left);
                        }
                        if (stackNodes.Peek().right != null)
                        {
                            Console.WriteLine("The right of that operand is: " + stackNodes.Peek().right.data);
                        }
                        else
                        {
                            Console.WriteLine("The right of that operand is: " + stackNodes.Peek());
                        }
                    }
                    string theOpenBracket = stackOperators.Pop(); // to pop out the "("
                    Console.WriteLine("The open bracket pop out at the end: " + theOpenBracket);
                    Console.WriteLine("End the operand\n\n");
                }
                else if (IsOperator(token))
                {
                    Console.WriteLine("Get in operator ==============");
                    while (stackOperators.Count > 0)
                    {
                        if (CheckPriority(stackOperators.Peek()) >= CheckPriority(token))
                        {
                            Console.WriteLine($"CheckPriority(stackOperators.Peek() => {CheckPriority(stackOperators.Peek())}");
                            Console.WriteLine($"CheckPriority(token) => {CheckPriority(token)}");
                            Console.WriteLine("The value of stackOperators.Peek(): " + stackOperators.Peek());
                            Console.WriteLine("The value of token: " + token);
                            Node nodeOfToken = new Node(stackOperators.Pop());
                            nodeOfToken.right = stackNodes.Pop();
                            nodeOfToken.left = stackNodes.Pop();
                            stackNodes.Push(nodeOfToken);

                            Console.WriteLine("Push operand in stack node. The value of that operand is: " + stackNodes.Peek().data);
                            if (stackNodes.Peek().left != null)
                            {
                                Console.WriteLine("The left of that operand is: " + stackNodes.Peek().left.data);
                            }
                            else
                            {
                                Console.WriteLine("The left of that operand is: " + stackNodes.Peek().left);
                            }
                            if (stackNodes.Peek().right != null)
                            {
                                Console.WriteLine("The right of that operand is: " + stackNodes.Peek().right.data);
                            }
                            else
                            {
                                Console.WriteLine("The right of that operand is: " + stackNodes.Peek());
                            }
                        }
                        else
                        {
                            break;
                        }
                    }
                    stackOperators.Push(token);
                    Console.WriteLine("The push the newest operator: " + stackOperators.Peek());
                    Console.WriteLine("End operator\n\n");
                }
                Console.WriteLine("End the loop with The token is: " + token);
            }
            // do the rest of operator
            while (stackOperators.Count()>0) 
            {
                Node node = new Node(stackOperators.Pop());
                node.right = stackNodes.Pop();
                node.left = stackNodes.Pop();
                stackNodes.Push(node);
                Console.WriteLine("Push operand in stack node. The value of that operand is: " + stackNodes.Peek().data);
                if (stackNodes.Peek().left != null)
                {
                    Console.WriteLine("The left of that operand is: " + stackNodes.Peek().left.data);
                }
                else
                {
                    Console.WriteLine("The left of that operand is: " + stackNodes.Peek().left);
                }
                if (stackNodes.Peek().right != null)
                {
                    Console.WriteLine("The right of that operand is: " + stackNodes.Peek().right.data);
                }
                else
                {
                    Console.WriteLine("The right of that operand is: " + stackNodes.Peek());
                }
            }
            return stackNodes.Peek();
        }
    }
}
