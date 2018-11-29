# Chat Application
## Run
To run the application you need to install Visual Studio 2017 with installed tools for ASP.NET and web deveplopment (.NET Framework 4.6.1 development tools and ASP.NET and web development tools). Run installer of Visual Studio and modify installation by selecting "ASP.NET and web deveplopment" if it is not installed.

Open project and then build and run. If some packages are missed and build failed, enable package restore by selecting the **Tools > NuGet Package Manager > Package Manager Settings** menu command, setting both options under **Package Restore**, and selecting **OK**. Then build the solution again.

## Description
Application has the following functionality: user can login with username and password or create new account. After authentication, user can change his password. All registered users are saved in database.

After entering chat room, user can see list of users who are currently online and send messages.
If option "All" is selected message will be sent to all online users. Otherwise only selected user will receive private message and will be marked for sender and receiver as private. If user opens another page of application he will be removed from the list of online users and it will be impossible to send messages to him. If user log off or closes tab hewill be removed from online users list after some time interval. 

Since the application uses ASP.NET MVC 5 framework, it uses OOP and Design Patterns out of the box. Any class of the application may be an example of OOP (e.g. [ChatApplication/ChatApplication/Hubs/ChatHub.cs](https://github.com/polilog/ChatApplication/blob/master/ChatApplication/Hubs/ChatHub.cs)). The example of desing pattern is that ASP.NET MVC 5 framework implements model-view-controller pattern, in which application is divided into 3 layers.  
       
