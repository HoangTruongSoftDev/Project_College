// See https://aka.ms/new-console-template for more information
//Console.WriteLine("Hello, World!");
using System;
using System.Threading;
using System.Threading.Tasks;
using System.Net.Http;
class Program
{
    public static void Main(string[] args)
    {
        readTextLocally();
    }
    // There is no return type of async function
    static async Task readTextLocally() 
    {
        Console.WriteLine("1. Read Locally");
        string newText= await File.ReadAllTextAsync("1.txt");
        Console.WriteLine($"2. Read Locally \n {newText}");

    }

    //aync function with return type (in this case is string). the return value of function will be Task<returnType>
    static async Task<string> readTextLocallyAndReturn()
    {
        Console.WriteLine("1. Read Locally");
        string newText = await File.ReadAllTextAsync("1.txt");
        Console.WriteLine($"2. Read Locally \n {newText}");
        return newText;
    }

    static async Task readFileFromUrl(string url)
    {
        Console.WriteLine("1. Read from URL");
        using (var httpClient = new HttpClient())
        {
            string result = await httpClient.GetStringAsync(url);
            Console.WriteLine($"2.  Read from URL \n {result}");
        }
           
        
    }
}