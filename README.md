# Chat Application
## Run
To run the application you need to install Visual Studio 2017 with installed tools for ASP.NET and web deveplopment (.NET Framework 4.6.1 development tools and ASP.NET and web development tools) and Signal R version 2.

If the packages are missed in Visual Studio, enable package restore by selecting the **Tools > NuGet Package Manager > Package Manager Settings** menu command, setting both options under **Package Restore**, and selecting **OK**. Then build the solution again.

## Description
Application has the following functionality: user can login with username and password or create new account. After authentication, user can change his password.
After entering chat room, user can see list of users who are currently online and send messages to all this users.

Since the application uses ASP.NET MVC 5 framework, it uses OOP and Design Patterns out of the box.