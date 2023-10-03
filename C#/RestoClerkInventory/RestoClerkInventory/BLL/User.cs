using RestoClerkInventory;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using RestoClerkInventory.ENUM;
using RestoClerkInventory.DAL;
using System.Windows.Forms;

namespace RestoClerkInventory.BLL
{
    public class User
    {
        private int userId;
        private string password;
        private Position position;

        public int UserId
        {
            get { return this.userId; }
            set { this.userId = value; }
        }
        public string Password 
        {
            get { return this.password; }
            set { this.password = value; }
        }
        public Position Position { get { return this.position; } set { this.position = value; } }

        public void InsertUser(User user) => UserDB.InsertRecord(user);

        public void UpdateUser(User user) => UserDB.UpdateRecord(user);
        public void DeleteUser(User user) => UserDB.DeleteRecord(user);

        public List<User> GetAllUsers() => UserDB.SelectAllRecords();

        public User GetUserById(int userId) => UserDB.SelectById(userId);
        public List<User> GetUsersByPosition() => UserDB.SelectRecordsByPosition();
        
        public override bool Equals(object obj)
        {
            
            if (!(obj.GetType() == typeof(User)))
                return false;
            User user = (User)obj;
            if (this.UserId == user.UserId)
                return true;
            return false;
            
            
        }
        public override string ToString()
        {
            return $"User ID: {this.UserId}\nPassword: {this.Password}\nPosition: {this.Position.ToString()}";
        }
    }
}