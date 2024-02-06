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
    public partial class LoginPage : ContentPage
    {
        public LoginPage()
        {
            InitializeComponent();
        }

        private void ButtonLogin_Clicked(object sender, EventArgs e)
        {
            if (string.IsNullOrEmpty(usernameEntry.Text))
            {
                labelErrorMessage.Text = "Your username is missing";
                labelErrorMessage.IsVisible = true;
                return;
            }
            if (string.IsNullOrEmpty(passwordEntry.Text))
            {
                labelErrorMessage.Text = "Your password is missing";
                labelErrorMessage.IsVisible = true;
                return;
            }
            if (usernameEntry.Text != "Truong" && passwordEntry.Text != "123")
            {
                labelErrorMessage.Text = "Your username or password is wrong\n\n Please enter the correct account: \n\t+ Username: Truong\n\t+ Password: 123";
                labelErrorMessage.IsVisible = true;
                return;
            }
            else
            {
                Navigation.PushAsync(new MainPage());
            }
        }
    }
}