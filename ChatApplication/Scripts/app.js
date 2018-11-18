var hub = $.connection.chatHub;
hub.client.message = function (user, msg) {
    if (msg != "") {
        $("#message").append("<li>" + user + ": " msg + "</li>")
    };
}

hub.client.user = function (user) {
    $("#message").append("<li>" + user + " entered chat</li>")
    $("#user").append("<li>" + user + "</li>")
}

$.connection.hub.start(function () {
    $("#send").click(function () {
        hub.server.send($("#txt").val());
        $("#txt").val(" ");
    })
})