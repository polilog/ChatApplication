﻿var hub = $.connection.chatHub;

$.connection.hub.start(function () {
    $("#send").click(function () {
        if ($("#txt").val() != "") {
            hub.server.send($('#username').val(), $("#txt").val(), $('#usersSelect').val());
            $("#txt").val("");
        }
    });
    $("#txt").keyup(function (event) {
        if (event.keyCode === 13) {
            $("#send").click();
        }
    });
})

hub.client.addMessage = function (name, message) {
    if (name == $('#username').val()) {
        name = "You";
    }
    var time = new Date().toLocaleTimeString();
    $("#message").append('<p>' + time + '<b> ' + htmlEncode(name)
        + '</b>: ' + htmlEncode(message) + '</p>')
}

hub.client.addPrivateMessage = function (name, message, toUser) {
    var time = new Date().toLocaleTimeString();
    if (name == $('#username').val()) {
        name = "You";
        $("#message").append('<p>' + time + '<b> ' + htmlEncode(name)
            + '</b><i> (to ' + toUser + ')</i>: ' + htmlEncode(message) + '</p>')
    }
    else {
        $("#message").append('<p>' + time + '<b> ' + htmlEncode(name)
            + '</b><i> (private)</i>: ' + htmlEncode(message) + '</p>')
    }
    
}

hub.client.onConnected = function (id, userName, allUsers) {
    $('#hdId').val(id);
    $('#username').val(userName);
    $('#header').text('Welcome, ' + userName);

    var distinct_users = []
    for (i = 0; i < allUsers.length; i++) {

        if (!(distinct_users.includes(allUsers[i].Name))) {
            distinct_users.push(allUsers[i].Name);
            addUser(allUsers[i].ConnectionId, allUsers[i].Name);
        }
    }
    $("#message").append('<p><b>You</b> entered chat</p>')
}

function addUser(id, name) {
    $("#chatusers").append('<p id="' + id + '"><b>' + htmlEncode(name) + '</b></p>');
    if (name != $('#username').val()) {
        $('#usersSelect').append($('<option>', {
            value: name,
            text: name
        }));
    }
}

hub.client.onNewUserConnected = function (id, name) {
    addUser(id, name);
    $("#message").append('<p><b>' + htmlEncode(name)
        + '</b> entered chat</p>')
}

hub.client.onUserDisconnected = function (id, userName) {

    $('#' + id).remove();
    $("#message").append('<p><b>' + htmlEncode(userName)
        + '</b> leaved chat</p>')
    $("#usersSelect option[value=" + userName +"]").remove();
}

function htmlEncode(value) {
    var encodedValue = $('<div />').text(value).html();
    return encodedValue;
}