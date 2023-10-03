using RestoClerkInventory.ENUM;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Web;
using System.Windows.Forms;

namespace RestoClerkInventory.Validation
{
    public static class Validator
    {
        public static bool IsValidUserId(string userId, string position)
        {
            int digitId = 0;
            digitId = (position == Position.Admin.ToString()) ? 4 : 6;
            if (digitId != 0)
                if (Regex.IsMatch(userId, @"^\d{" + digitId + "}$"))
                    return true;
            return false;


        }
        public static bool IsValidName(string name)
        {
            if (!Regex.IsMatch(name, @"^[A-Z][a-z]+([ ][A-Z][a-z]+)*$"))
                return false;
            return true;
        }

        public static bool IsValidEmail(string email)
        {
            if (!Regex.IsMatch(email, @"^(\w|[.]\w)*@\w*[.]\w*$"))
                return false;
            return true;
        }

        public static bool IsValidPassword(string password)
        {
            if (!Regex.IsMatch(password, @"^\w+$"))
                return false;
            return true;
        }
    }
}
