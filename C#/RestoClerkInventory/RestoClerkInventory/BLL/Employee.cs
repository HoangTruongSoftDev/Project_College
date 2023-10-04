using RestoClerkInventory.DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace RestoClerkInventory.BLL
{
    public class Employee
    {
        private User user;
        private string firstName;
        private string lastName;
        private string email;

        public User User
        {
            get { return this.user; }
            set { this.user = value; }
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

        public void InsertEmployee(Employee employee) => EmployeeDB.InsertRecord(employee);

        public void UpdateEmployee(Employee employee) => EmployeeDB.UpdateRecord(employee);
        public void DeleteEmployee(Employee employee) => EmployeeDB.DeleteRecord(employee);

        //public List<Employee> GetAllEmployees() => EmployeeDB.SelectAllRecords();

        public Employee GetEmployeeById(int employeeId) => EmployeeDB.SelectRecordById(employeeId);
        public List<Employee> GetEmployeesByFirstName(string firstName) => EmployeeDB.SelectRecordsByFirstName(firstName);
        public List<Employee> GetEmployeesByLastName(string lastName) => EmployeeDB.SelectRecordsByLastName(lastName);
        public List<Employee> GetEmployeesByEmail(string email) => EmployeeDB.SelectRecordsByEmail(email);

        public List<Employee> GetAllEmployeesJoinForeignTable() => EmployeeDB.SelectAllRecordsJoinForeignTable();

        public List<Employee> GetEmployeesByPosition(string inputPosition) => EmployeeDB.SelectRecordsByPosition(inputPosition);
        public override string ToString()
        {
            return $"User: {this.User}\n First Name: {this.FirstName}\nLast Name: {this.LastName}\nEmail: {this.Email}";
        }
    }
}