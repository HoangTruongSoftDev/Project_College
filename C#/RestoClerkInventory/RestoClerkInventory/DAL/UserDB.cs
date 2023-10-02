using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using RestoClerkInventory.BLL;
using RestoClerkInventory.SERVICE;
using RestoClerkInventory.ENUM;
namespace RestoClerkInventory.DAL
{
    public static class UserDB
    {
        public static void InsertRecord(User user)
        {
            SqlConnection conn = Service.GetDBConnection();
            SqlCommand cmdInsert = new SqlCommand("INSERT INTO Users VALUES (@userId, @password, @position); ", conn);
            cmdInsert.Parameters.AddWithValue("@userId", user.UserId);
            cmdInsert.Parameters.AddWithValue("@password", user.Password);
            cmdInsert.Parameters.AddWithValue("@position", user.Position);
            cmdInsert.ExecuteNonQuery();
            conn.Close();
        }
        public static void UpdateRecord(User user)
        {
            SqlConnection conn = Service.GetDBConnection();
            SqlCommand cmdUpdate = new SqlCommand();
            cmdUpdate.CommandText = "UPDATE Users SET Password = @password, Position = @position WHERE UserId = @userId;";
            cmdUpdate.Connection = conn;
            cmdUpdate.Parameters.AddWithValue("@userId", user.UserId);
            cmdUpdate.Parameters.AddWithValue("@password", user.Password);
            cmdUpdate.Parameters.AddWithValue("@position", user.Position);
            cmdUpdate.ExecuteNonQuery();
            conn.Close();
        }
        public static void DeleteRecord(User user)
        {
            SqlConnection conn = Service.GetDBConnection();
            SqlCommand cmdDelete = new SqlCommand("DELETE FROM Users WHERE UserId = @userId; ", conn);
            cmdDelete.Parameters.AddWithValue("@userId", user.UserId);
            cmdDelete.ExecuteNonQuery();
            conn.Close();
        }
        public static List<User> SelectAllRecords()
        { 
            List<User> listAllUsers = new List<User>(); 
            SqlConnection conn = Service.GetDBConnection();
            SqlCommand cmdSelectAll = new SqlCommand("SELECT * FROM Users; ", conn);
            SqlDataReader reader = cmdSelectAll.ExecuteReader();
            User user;
            while (reader.Read()) 
            {
                user = new User();
                user.UserId = Convert.ToInt32(reader["UserId"]);
                user.Password = reader["Password"].ToString();
                Position position = Position.Undefined;
                if (Enum.TryParse(reader["Position"].ToString(), out position))
                    user.Position = position;               
                listAllUsers.Add(user); 
            }
            conn.Close();

            if (listAllUsers.Any())
                return listAllUsers;    
            return null;
            
        }

        public static User SelectById(int userId) 
        {
            SqlConnection conn = Service.GetDBConnection();
            SqlCommand cmdSelectById = new SqlCommand("SELECT * FROM Users WHERE UserId = @userId;", conn);
            SqlDataReader reader = cmdSelectById.ExecuteReader();
            User user = null;
            if (reader.Read())
            {
                user = new User();
                user.UserId= Convert.ToInt32(reader["UserId"]); 
                user.Password = reader["Password"].ToString();
                Position position = Position.Undefined;
                if(Enum.TryParse(reader["Password"].ToString(),out position))               
                    user.Position = position;               
            }
            return user;
        }
        
    }
}