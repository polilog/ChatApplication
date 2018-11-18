using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using Microsoft.AspNet.SignalR;

namespace ChatApplication.Hubs
{
    public class ChatHub : Hub
    {
        public override Task OnConnected()
        {
            Clients.All.User(Context.User.Identity.Name);
            return base.OnConnected();
        }

        public override Task OnDisconnected(bool stopCalled)
        {
            Clients.All.User(Context.User.Identity.Name + " leaved chat");
            return base.OnDisconnected(stopCalled);
        }

        public void Send(string message)
        {
            Clients.Caller.message("You", message);
            Clients.Others.message(Context.User.Identity.Name, message);
        }
    }
}