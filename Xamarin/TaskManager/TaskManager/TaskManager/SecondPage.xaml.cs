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
    public partial class SecondPage : ContentPage
    {
        public SecondPage()
        {
            InitializeComponent();
            
        }
        protected override void OnAppearing()
        {
            base.OnAppearing();
            using (SQLiteConnection conn = new SQLiteConnection(App.databaseLocation))
            {
                conn.CreateTable<MyTask>();
                var listOfMyTasks = conn.Table<MyTask>().ToList();
                listViewTask.ItemsSource = listOfMyTasks;
            }
        }
    }
}