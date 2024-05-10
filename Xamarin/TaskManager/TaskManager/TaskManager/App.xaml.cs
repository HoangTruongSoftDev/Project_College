using System;
using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace TaskManager
{
    public partial class App : Application
    {
        public static string databaseLocation = string.Empty;
        public App()
        {
            InitializeComponent();

            MainPage = new MainPage();
        }
        public App(string databaseLocation)
        {
            InitializeComponent();
            MainPage = new NavigationPage(new FirstPage());
            App.databaseLocation = databaseLocation;
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
