using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Numerics;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Serialization;

namespace testing
{
    public class Program
    {
        public static IMongoCollection<Player> mongoCollection;
        static void Main(string[] args)
        {
            var connectionString = ConfigurationManager.ConnectionStrings["MongoDBConnection"].ConnectionString;
            var databaseName = MongoUrl.Create(connectionString).DatabaseName;
            var mongoClient = new MongoClient(connectionString);
            var database = mongoClient.GetDatabase(databaseName);
            mongoCollection = database.GetCollection<Player>("players");
            Player player = new Player()
            {
                PlayerName = "Hung",
                Password = "12356",
                Age = 22
            };
            //InsertPlayer(player);
            //UpdatePlayer(player);
            //DeletePlayer();
            LoadPlayerData();
            //searchByName();
            Console.ReadKey();
        }
        public static void UpdatePlayer(Player player)
        {
            var filter = Builders<Player>.Filter.Eq(p => p.PlayerId, player.PlayerId);
            var updateDefinition = Builders<Player>.Update
                .Set(p => p.PlayerName, "Thien")
                .Set(p => p.Password, "123456789")
                .Set(p => p.Age, 21);
            mongoCollection.UpdateOne(filter, updateDefinition);
        }
        public static void InsertPlayer(Player player)
        {
            mongoCollection.InsertOne(player);
        }
        public static void LoadPlayerData() // search all
        {
            var players = mongoCollection.Find(Builders<Player>.Filter.Empty).ToList();
            displayPlayers(players);
        }
        public static void DeletePlayer()
        {
            var filterDefinition = Builders<Player>.Filter.Eq(p => p.PlayerId, "663290fe575fceb67090e11f");
            mongoCollection.DeleteOne(filterDefinition);
        }
        private static void displayPlayers(List<Player> players)
        {
            Console.WriteLine("\n===========================================");
            players.ForEach(p => 
            {
                Console.WriteLine(p);
            });
            Console.WriteLine("\n===========================================\n");
        }
        private static void searchByName()
        {
            var filterDefinition = Builders<Player>.Filter.Eq(p => p.PlayerName, "Hoang");
            var players = mongoCollection.Find(filterDefinition).ToList();
            displayPlayers(players);
        }
        private static void searchByAge()
        {
            var filterDefinition = Builders<Player>.Filter.Eq(p => p.Age, 22);
            var players = mongoCollection.Find(filterDefinition).ToList();
            displayPlayers(players);
        }
    }
}
