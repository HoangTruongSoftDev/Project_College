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
        public static bool IsValidUserId (string userId, string position)
        {
            int digitId = 0;         
            digitId = (position == Position.Admin.ToString()) ? 4 : 6;
            if (digitId != 0)
                if (Regex.IsMatch(userId, @"^\d{" + digitId + "}$"))
                    return true;
            return false;
        }
    }
}