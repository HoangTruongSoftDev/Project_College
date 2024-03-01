using SQLite;
using System;
using System.Collections.Generic;
using System.Text;

namespace PortfolioApp.Model
{
    public class Profile
    {
        [PrimaryKey, AutoIncrement]
        public int Id { get; set; }
        [MaxLength(250)]
        public string Description { get; set; }
    }
}
