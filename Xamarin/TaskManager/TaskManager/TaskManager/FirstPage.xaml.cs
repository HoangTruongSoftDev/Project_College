using SQLite;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TaskManager.Model;
using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace TaskManager
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class FirstPage : ContentPage
    {
        public FirstPage()
        {
            
            InitializeComponent();
        }

        private void saveButton_Clicked(object sender, EventArgs e)
        {
            if (string.IsNullOrWhiteSpace(descriptionEntry.Text) || string.IsNullOrWhiteSpace(priorityEntry.Text))
            {
                DisplayAlert("Missing!!!", "Missing Description Task or Priority", "OK");
                return;
            }
            if (priorityEntry.Text != "High" && priorityEntry.Text != "Medium" && priorityEntry.Text != "Low")
            {
               
                DisplayAlert("Warning!!!", "Priority must be entered as \"High\", \"Medium\" or \"Low\"", "OK");
                return;
            }
            MyTask myTask = new MyTask() 
            {
                Description = descriptionEntry.Text,
                Priority = priorityEntry.Text,
            };
            using (SQLiteConnection conn = new SQLiteConnection(App.databaseLocation))
            {
                conn.CreateTable<MyTask>();
                int row = conn.Insert(myTask);
                if (row > 0)
                    DisplayAlert("Successfully!!!", $"Save Task Successfully!\n\nTask Information:\n\t+ Task Description: {myTask.Description}\n\t+ Task Priority: {myTask.Priority}", "OK");
                else
                    DisplayAlert("Failed!!!", "Something is wrong", "OK");
            }
            Navigation.PushAsync(new SecondPage());
        }
    }
}