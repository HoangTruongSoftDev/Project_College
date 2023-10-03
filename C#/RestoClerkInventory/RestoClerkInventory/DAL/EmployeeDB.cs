using RestoClerkInventory.BLL;
using RestoClerkInventory.ENUM;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using RestoClerkInventory.SERVICE;
namespace RestoClerkInventory.DAL
{
    public static class EmployeeDB
    {
        public static void InsertRecord(Employee employee)
        {
            SqlConnection conn = Service.GetDBConnection();
            SqlCommand cmdInsert = new SqlCommand("INSERT INTO Employees VALUES (@employeeId, @firstName, @lastName, @email); ", conn);
            cmdInsert.Parameters.AddWithValue("@employeeId", employee.User.UserId);
            cmdInsert.Parameters.AddWithValue("@firstName", employee.FirstName);
            cmdInsert.Parameters.AddWithValue("@lastName", employee.LastName);
            cmdInsert.Parameters.AddWithValue("@email", employee.Email);
            cmdInsert.ExecuteNonQuery();
            conn.Close();
        }
        public static void UpdateRecord(Employee employee)
        {
            SqlConnection conn = Service.GetDBConnection();
            SqlCommand cmdUpdate = new SqlCommand();
            cmdUpdate.CommandText = "UPDATE Employees SET FirstName = @firstName, LastName = @lastName, Email = @email WHERE EmployeeId = @employeeId;";
            cmdUpdate.Connection = conn;
            cmdUpdate.Parameters.AddWithValue("@employeeId", employee.User.UserId);
            cmdUpdate.Parameters.AddWithValue("@firstName", employee.FirstName);
            cmdUpdate.Parameters.AddWithValue("@lastName", employee.LastName);
            cmdUpdate.Parameters.AddWithValue("@email", employee.Email);
            cmdUpdate.ExecuteNonQuery();
            conn.Close();
        }
        public static void DeleteRecord(Employee employee)
        {
            SqlConnection conn = Service.GetDBConnection();
            SqlCommand cmdDelete = new SqlCommand("DELETE FROM Employees WHERE EmployeeId = @employeeId; ", conn);
            cmdDelete.Parameters.AddWithValue("@employeeId", employee.User.UserId);
            cmdDelete.ExecuteNonQuery();
            conn.Close();
        }
        //public static List<Employee> SelectAllRecords()
        //{
        //    List<Employee> listAllEmployees = new List<Employee>();
        //    SqlConnection conn = Service.GetDBConnection();
        //    SqlCommand cmdSelectAll = new SqlCommand("SELECT * FROM Employees;", conn);
        //    SqlDataReader reader = cmdSelectAll.ExecuteReader();
        //    Employee employee;
        //    while (reader.Read())
        //    {
        //        employee = new Employee();
        //        employee.User.UserId = Convert.ToInt32(reader["EmployeeId"]);
        //        employee.FirstName = reader["FirstName"].ToString();
        //        employee.LastName = reader["LastName"].ToString();
        //        employee.Email = reader["Email"].ToString();
        //        listAllEmployees.Add(employee);
        //    }
        //    conn.Close();

        //    if (listAllEmployees.Any())
        //        return listAllEmployees;
        //    return null;
        //}

        public static Employee SelectById(int employeeId)
        {
            SqlConnection conn = Service.GetDBConnection();
            SqlCommand cmdSelectById = new SqlCommand("SELECT Employees.EmployeeId, Employees.FirstName, Employees.LastName, Employees.Email, " +
                                                     "Users.Position, Users.Password " +
                                                     "FROM Employees JOIN Users ON Employees.EmployeeId = Users.UserId " +
                                                     "WHERE Employees.EmployeeId = @employeeId;", conn);
            cmdSelectById.Parameters.AddWithValue("@employeeId", employeeId);
            SqlDataReader reader = cmdSelectById.ExecuteReader();
            Employee employee = null;
            User user;
            if (reader.Read())
            {
                employee = new Employee();
                user = new User();
                user.UserId = Convert.ToInt32(reader["EmployeeId"]);
                user.Password = reader["Password"].ToString();
                Position position = new Position();
                if (Enum.TryParse(reader["Position"].ToString(), out position))
                    user.Position = position;
                employee.User = user;
                employee.FirstName = reader["FirstName"].ToString();
                employee.LastName = reader["LastName"].ToString();
                employee.Email = reader["Email"].ToString();               
            }
            return employee;
        }

        public static List<Employee> SelectAllRecordsJoinForeignTable()
        {
            List<Employee> listAllEmployees = new List<Employee>();
            SqlConnection conn = Service.GetDBConnection();
            SqlCommand cmdSelectAll = new SqlCommand("SELECT Employees.EmployeeId, Employees.FirstName, Employees.LastName, Employees.Email, " +
                                                     "Users.Position, Users.Password " +
                                                     "FROM Employees JOIN Users ON Employees.EmployeeId = Users.UserId;", conn);
            SqlDataReader reader = cmdSelectAll.ExecuteReader();
            Employee employee;
            User user;
            while (reader.Read())
            {
                employee = new Employee();
                user = new User();
                user.UserId = Convert.ToInt32(reader["EmployeeId"]);
                user.Password = reader["Password"].ToString();
                Position position = new Position();
                if (Enum.TryParse(reader["Position"].ToString(),out position))
                    user.Position = position;
                employee.User = user;
                employee.FirstName = reader["FirstName"].ToString();
                employee.LastName = reader["LastName"].ToString();
                employee.Email = reader["Email"].ToString();
                listAllEmployees.Add(employee);
            }
            conn.Close();

            if (listAllEmployees.Any())
                return listAllEmployees;
            return null;
        }
    }
}