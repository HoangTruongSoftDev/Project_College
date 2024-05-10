using System;
using System.Collections.Generic;
using System.Text;
using SQLite;

namespace TaskManager.Model
{
    public class MyTask
    {
        [PrimaryKey, AutoIncrement]
        public int Id { get; set; }
        public string Description { get; set; }
        public string Priority { get; set; }
    }
}
