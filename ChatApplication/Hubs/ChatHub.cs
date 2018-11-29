using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using Microsoft.AspNet.SignalR;
using ChatApplication.Models;

namespace ChatApplication.Hubs
{
    public class ChatHub : Hub
    {
        static List<Connection> Connections = new List<Connection>();

        public override Task OnConnected()
        {
            var id = Context.ConnectionId;
            if (!Connections.Any(x => x.ConnectionId == id))
            {
                var name = Context.User.Identity.Name;
                if (!Connections.Any(x => x.Name == name))
                {
                    Clients.AllExcept(id).onNewUserConnected(id, name);
                }
                Connections.Add(new Connection(name, id));
                Clients.Caller.onConnected(id, name, Connections);
            }
            return base.OnConnected();
        }

        public override Task OnDisconnected(bool stopCalled)
        {
            var item = Connections.FirstOrDefault(x => x.ConnectionId == Context.ConnectionId);
            if (item != null)
            {
                Connections.Remove(item);
                var id = Context.ConnectionId;
                if (!Connections.Any(x => x.Name == item.Name))
                {
                    Clients.All.onUserDisconnected(id, item.Name);
                }
            }

            return base.OnDisconnected(stopCalled);
        }

        public void Send(string name, string message, string toUser)
        {
            if (toUser == "")
            {
                Clients.All.addMessage(name, message);
            }
            else
            {
                var userConnections = Connections.Where(c => c.Name == toUser || c.Name == name).Select(c => c.ConnectionId);
                foreach (var connection in userConnections)
                {
                    Clients.Client(connection).addPrivateMessage(name, message, toUser);
                }
            }
        }
    }
}