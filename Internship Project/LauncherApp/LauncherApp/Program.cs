using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LauncherApp
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // Path to your Electron project's executable file
            string electronAppPath = @"C:\Truong\Internship Project\Canada_Horizon_Database\main.js";

            try
            {
                // Launch the Electron project
                Process.Start(electronAppPath);
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error launching Electron project: {ex.Message}");
            }
        }
    }
}
