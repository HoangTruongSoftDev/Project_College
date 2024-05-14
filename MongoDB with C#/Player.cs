using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace testing
{
    public class Player
    {
        [BsonId, BsonElement("_id"), BsonRepresentation(BsonType.ObjectId)]
        public string PlayerId { get; set; }
        [BsonElement("playerName"), BsonRepresentation(BsonType.String)]
        public string PlayerName { get; set; }
        [BsonElement("password"), BsonRepresentation(BsonType.String)]
        public string Password { get; set; }
        [BsonElement("age"), BsonRepresentation(BsonType.Int64)]
        public int Age { get; set; }

        public override string ToString()
        {
            return
                $"\nPlayer ID: {this.PlayerId}\n" +
                $"Player Name: {this.PlayerName}\n" +
                $"Password: {this.Password}\n" +
                $"Age: {this.Age}\n";
        }
    }
}
