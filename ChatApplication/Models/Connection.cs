using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ChatApplication.Models
{
    public class Connection
    {
        public string Name { get; set; }
        public string ConnectionId { get; set; }

        public Connection(string name, string connectionId)
        {
            Name = name;
            ConnectionId = connectionId;
        }
    }
}