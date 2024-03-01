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
	public partial class DetailPage : ContentPage
	{
		Profile selectedProfile;
		public DetailPage ()
		{
			InitializeComponent ();
		}
        public DetailPage(Profile profile)
        {
			this.selectedProfile = profile;
            InitializeComponent();
            experienceEntry.Text = selectedProfile.Description;
        }

        private void updateButton_Clicked(object sender, EventArgs e)
        {
            selectedProfile.Description = experienceEntry.Text;
            using (SQLiteConnection conn = new SQLiteConnection(App.DatabaseLocation))
            {
                conn.CreateTable<Profile>();
                int row = conn.Update(selectedProfile);
                if (row > 0)
                    DisplayAlert("Success", "Updated", "OK");
                else
                    DisplayAlert("Failed", "Failed Updated", "OK");
            }
        }

        private void deleteButton_Clicked(object sender, EventArgs e)
        {
            using (SQLiteConnection conn = new SQLiteConnection(App.DatabaseLocation))
            {
                conn.CreateTable<Profile>();
                int row = conn.Delete(selectedProfile);
                if (row > 0)
                    DisplayAlert("Success", "Deleted", "OK");
                else
                    DisplayAlert("Failed", "Failed Deleted", "OK");
                Navigation.PushAsync(new MainPage());
            }
        }
    }
}