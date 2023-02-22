using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Practise
{
    class SquareRoot
    {
        
        public double Sqrt(double number, double initialNumber)
        {
            
            if (number == 1.0)
            {
                Console.WriteLine("1) Number == " + number);
                return number;
            }
            else if (number == Math.Ceiling(initialNumber*initialNumber))
            {
                Console.WriteLine("2) Number == " + number);
                Console.WriteLine("2) InitialNumber == " + initialNumber);
                Console.WriteLine("2) Ceiling: " + Math.Ceiling(initialNumber * initialNumber));
                return initialNumber; 
            }
            else
            {
                initialNumber = (initialNumber + number/initialNumber)/2;
                Console.WriteLine("3) Number == " + number);
                Console.WriteLine("3) InitialNumber == " + initialNumber);
                Console.WriteLine("3) Ceiling: " + (initialNumber * initialNumber));
                return Sqrt(number, initialNumber);
            }
        }
    }
}
