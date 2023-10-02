using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace RestoClerkInventory.SERVICE
{
    public static class Service
    {
        public static void ClearAllTextBoxes(Control parent)
        {
            foreach (Control currentControl in parent.Controls)
            {
                if (currentControl is TextBox)
                {
                    ((TextBox)currentControl).Text = string.Empty;
                }
                else if (currentControl.HasControls())
                {
                    ClearAllTextBoxes(currentControl);
                }
            }
        }

        public static SqlConnection GetDBConnection() 
        {
            SqlConnection conn = new SqlConnection();
            conn.ConnectionString = ConfigurationManager.ConnectionStrings["DBConnection"].ConnectionString;
            conn.Open();
            return conn;
        } 
    }
}