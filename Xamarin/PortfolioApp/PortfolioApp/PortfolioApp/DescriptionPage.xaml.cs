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
	public partial class DescriptionPage : ContentPage
	{
		public DescriptionPage ()
		{
			InitializeComponent ();
		}
        protected override void OnAppearing()
        {
            base.OnAppearing();
            using (SQLiteConnection conn = new SQLiteConnection(App.DatabaseLocation))
            {
                conn.CreateTable<Profile>(); // CreateTable<Profile>() to make sure no crash because if this table exists, it wont create a new one
                var listOfProfiles = conn.Table<Profile>().ToList();
                descriptionListView.ItemsSource = listOfProfiles;
            }
        }
        private void descriptionListView_ItemSelected(object sender, SelectedItemChangedEventArgs e)
        {
            //var listView = (ListView) sender;
            //var selectedProfile = (Profile)listView.SelectedItem;
            //Navigation.PushAsync(new DetailPage(selectedProfile));

            var selectedProfile = (Profile) e.SelectedItem;
            if (selectedProfile != null)
            {
                Navigation.PushAsync(new DetailPage(selectedProfile));
            }
        }
    }
}