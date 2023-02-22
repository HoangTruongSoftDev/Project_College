using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Practise
{
    class ComputationalComplexity
    {
        int m, n;
        
        public ComputationalComplexity(int m ,int n) 
        {
            this.m = m;
            this.n = n;
        }
        public void NestedLoop(int m, int n)
        {
            int count = 0;
            for (int i = 0; i < n; i++) 
            {
                for (int j = i; j < m; j++)
                {
                    count++;
                }
            }
            Console.WriteLine("The Loops have been repeated " + count + " times");
        }
    }
}
