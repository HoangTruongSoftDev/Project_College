using PortfolioApp.Model;
using SQLite;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace PortfolioApp
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class ProfilePage : ContentPage
    {
        public ProfilePage()
        {
            InitializeComponent();
        }

        private void ToolbarItem_Clicked(object sender, EventArgs e)
        {
            Profile profile = new Profile
            {
                
                Description = descriptionEntry.Text
            };
            //SQLiteConnection conn = new SQLiteConnection(App.DatabaseLocation);
            //conn.CreateTable<Profile>();
            //int row = conn.Insert(profile);
            //conn.Close();
            //if (row > 0)
            //{
            //    DisplayAlert("Success", $"Data INserted: {row}", "OK");
            //} 
            //else
            //{
            //    DisplayAlert("Failed", "Check again", "OK");
            //}

            using (SQLiteConnection conn = new SQLiteConnection(App.DatabaseLocation))
            {
                conn.CreateTable<Profile>();
                int row = conn.Insert(profile);
                if (row > 0)
                {
                    DisplayAlert("Success", $"Data INserted: {row}", "OK");
                }
                else
                {
                    DisplayAlert("Failed", "Check again", "OK");
                }
            }
        }
    }
}