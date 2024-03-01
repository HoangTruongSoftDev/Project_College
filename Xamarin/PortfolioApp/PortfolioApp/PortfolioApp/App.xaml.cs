using System;
using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace PortfolioApp
{

    public partial class App : Application
    {
        public static string DatabaseLocation = string.Empty;
        public App()
        {
            InitializeComponent();

            MainPage = new NavigationPage(new LoginPage());
        }
        // create constructor with database location paramater
        public App(string databaseLocation)
        {
            InitializeComponent();
            MainPage = new NavigationPage(new LoginPage());
            DatabaseLocation = databaseLocation;
        }
        protected override void OnStart()
        {
        }

        protected override void OnSleep()
        {
        }

        protected override void OnResume()
        {
        }
    }
}
