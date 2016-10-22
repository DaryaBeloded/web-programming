"use strict";

$(document).ready(function () {
    $.ajax({ 
        type: 'GET',
        url:'https://api.worldoftanks.ru/wot/account/info/?application_id=9984e7e11df63b8bf2f931be4078b451&account_id=291,588,782',
        success:function(players) { 
            console.log(players);
            var template = Handlebars.compile( $('#template').html()  );
            $('.updates').append( template(players)  );
        },
        error:function() {
            console.log("error"); 
        }
    });
    setInterval(location.reload, 100000);
})
