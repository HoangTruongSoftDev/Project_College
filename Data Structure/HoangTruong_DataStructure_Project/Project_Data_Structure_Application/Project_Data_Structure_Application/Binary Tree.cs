using System;
using System.Collections;
using System.Collections.Generic;
using System.Diagnostics.Eventing.Reader;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace Project_Data_Structure_Application
{
    public class Binary_Tree
    {
        public Node root;
        public Binary_Tree()
        {
            this.root = null;
        }
        public void PrintInOrder(Node root)
        {
            if (root == null)
            {
                return;
            }

            PrintInOrder(root.Left);
            Console.Write(root.Data + " ");
            PrintInOrder(root.Right);
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
            //return !IsOperator(token) && token != "(" && token != ")";
            return Regex.IsMatch(token, @"^\d+(\.\d+)*$");
        }
        public Stack<string> stackOperators = new Stack<string>();
        public Stack<Node> stackNodes = new Stack<Node>();

        public bool CheckValidMathExpression(string mathExpression)
        {
            // "1+2*4-7/3*(6-1)%3";
            //"5+(6+)7+7";

            int counterOpenParathesis = 0;
            MatchCollection matches = Regex.Matches(mathExpression, @"([-+*/%\(\)]|\d+(\.\d+)*)");
            string[] listOfTokens = new string[matches.Count];
            int checkCorrectStringMath = 0;
            for (int i = 0; i < matches.Count; i++)
            {
                listOfTokens[i] = matches[i].Value;
                checkCorrectStringMath += listOfTokens[i].Length;
            }
            if (checkCorrectStringMath != mathExpression.Length)
            {
                Console.WriteLine("This string include the token that is not related to math expression");
                return false;
            }
            bool checkOperator = false;
            bool checkOperand = false;
            if (IsOperator(listOfTokens[0]) || IsOperator(listOfTokens[listOfTokens.Length - 1]) || listOfTokens[0] == ")" || listOfTokens[listOfTokens.Length - 1] == "(")
            {
                Console.WriteLine("It can't be operators at the begin or at the end of the math expression");
                return false;
            }
            for (int i = 0; i < listOfTokens.Length; i++)
            {
                string token = listOfTokens[i];
                if (IsOperator(token))
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
                else if (IsOperand(token))
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
                else if (token == "(")
                {
                    try
                    {
                        if (IsOperand(listOfTokens[i - 1]) || listOfTokens[i - 1] == ")")
                        {
                            Console.WriteLine("Before the opening parathesis, it must be the operator and can not be the closing parathesis");
                            return false;
                        }
                        if (IsOperator(listOfTokens[i+1]) || listOfTokens[i+1] == ")")
                        {
                            Console.WriteLine("After the opening parathesis, it must be the operand and can not be the closing parathesis");
                            return false;
                        }
                        
                    }
                    catch (Exception exception)
                    {
                        continue;
                    }
                    finally { counterOpenParathesis++; }
                }
                else
                {
                    // token == ")"
                    try
                    {
                        if (IsOperator(listOfTokens[i-1]) || listOfTokens[i - 1] == "(")
                        {
                            Console.WriteLine("Before the closing parathesis, it must be the operand and can not be the opening parathesis");
                            return false;
                        }
                        if (IsOperand(listOfTokens[i + 1]) || listOfTokens[i + 1] == "(")
                        {
                            Console.WriteLine("After the closing parathesis, it must be the operator and can not be the opening parathesis");
                            return false;
                        }
                        
                    }
                    catch (Exception exception)
                    {                       
                        continue;
                    }
                    finally { counterOpenParathesis--; }
                }
                
            }
            if (counterOpenParathesis != 0)
            {
                Console.WriteLine("You must close the parathesis when open it or vice versa");
                return false;
            }
            return true;
        }

        public Node ConvertMathExpressionToBinaryTree(string mathExpression)
        {
            /*      (a+b)*c-d/e      */
            if (!CheckValidMathExpression(mathExpression))
            {
                Console.WriteLine("This is not valid Math Expression");
                return null;
            }
            MatchCollection matches = Regex.Matches(mathExpression, @"([-+*/%\(\)]|\d+(\.\d+)*)");
            string[] listOfTokens = new string[matches.Count];
            for (int i = 0; i < matches.Count; i++)
            {
                listOfTokens[i] = matches[i].Value;
            }
            foreach (string token in listOfTokens)
            {
                Console.WriteLine("The token is: " + token);
                if (IsOperand(token))
                {
                    Console.WriteLine("Get in operand ============");
                    Node nodeOfToken = new Node(token);
                    stackNodes.Push(nodeOfToken);
                    Console.WriteLine("Push operand in stack node. The value of that operand is: " + stackNodes.Peek().Data);
                    if (stackNodes.Peek().Left != null)
                    {
                        Console.WriteLine("The Left of that operand is: " + stackNodes.Peek().Left.Data);
                    }
                    else
                    {
                        Console.WriteLine("The Left of that operand is: " + stackNodes.Peek().Left);
                    }
                    if (stackNodes.Peek().Right != null)
                    {
                        Console.WriteLine("The Right of that operand is: " + stackNodes.Peek().Right.Data);
                    }
                    else
                    {
                        Console.WriteLine("The Right of that operand is: " + stackNodes.Peek());
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
                        node.Right = stackNodes.Pop();
                        node.Left = stackNodes.Pop();
                        stackNodes.Push(node);

                        Console.WriteLine("Push operand in stack node. The value of that operand is: " + stackNodes.Peek().Data);
                        if (stackNodes.Peek().Left != null)
                        {
                            Console.WriteLine("The Left of that operand is: " + stackNodes.Peek().Left.Data);
                        }
                        else
                        {
                            Console.WriteLine("The Left of that operand is: " + stackNodes.Peek().Left);
                        }
                        if (stackNodes.Peek().Right != null)
                        {
                            Console.WriteLine("The Right of that operand is: " + stackNodes.Peek().Right.Data);
                        }
                        else
                        {
                            Console.WriteLine("The Right of that operand is: " + stackNodes.Peek());
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
                            nodeOfToken.Right = stackNodes.Pop();
                            nodeOfToken.Left = stackNodes.Pop();
                            stackNodes.Push(nodeOfToken);

                            Console.WriteLine("Push operand in stack node. The value of that operand is: " + stackNodes.Peek().Data);
                            if (stackNodes.Peek().Left != null)
                            {
                                Console.WriteLine("The Left of that operand is: " + stackNodes.Peek().Left.Data);
                            }
                            else
                            {
                                Console.WriteLine("The Left of that operand is: " + stackNodes.Peek().Left);
                            }
                            if (stackNodes.Peek().Right != null)
                            {
                                Console.WriteLine("The Right of that operand is: " + stackNodes.Peek().Right.Data);
                            }
                            else
                            {
                                Console.WriteLine("The Right of that operand is: " + stackNodes.Peek());
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
            while (stackOperators.Count() > 0)
            {
                Node node = new Node(stackOperators.Pop());
                node.Right = stackNodes.Pop();
                node.Left = stackNodes.Pop();
                stackNodes.Push(node);
                Console.WriteLine("Push operand in stack node. The value of that operand is: " + stackNodes.Peek().Data);
                if (stackNodes.Peek().Left != null)
                {
                    Console.WriteLine("The Left of that operand is: " + stackNodes.Peek().Left.Data);
                }
                else
                {
                    Console.WriteLine("The Left of that operand is: " + stackNodes.Peek().Left);
                }
                if (stackNodes.Peek().Right != null)
                {
                    Console.WriteLine("The Right of that operand is: " + stackNodes.Peek().Right.Data);
                }
                else
                {
                    Console.WriteLine("The Right of that operand is: " + stackNodes.Peek());
                }
            }
            return stackNodes.Peek();
        }
    }
}
