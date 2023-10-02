using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace RestoClerkInventory.BLL
{
    public class Employee
    {
        private int employeeId;
        private string firstName;
        private string lastName;
        private string email;

        public int EmployeeId
        {
            get { return this.employeeId; }
            set { this.employeeId = value; }
        }

        public string FirstName
        {
            set { this.firstName = value; }
            get { return this.firstName;  }
        }
        public string LastName
        {
            set => this.lastName = value;
            get => this.lastName;
        }
        public string Email { get => this.email; set => this.email = value; }
    }
}