'use strict';

//window.i=0;
var account=[291,588,782,555,999, 458];


$(document).ready(function () {
    Promise.resolve(
    $.ajax({
        type: 'GET',
        url:'https://api.worldoftanks.ru/wot/account/info/?application_id=9984e7e11df63b8bf2f931be4078b451&account_id='+account,
        //url: 'http://superresheba.by/test.php',
        timeout: 3000,
       /* statusCode: {
            404: function() {
            $('.updates').empty().append('<div>page not found</div> ');
            },
            408:function() {
            $('.updates').empty().append('<div>истекло время ожидания</div> ');
            }, 
            
        },*/
        
    })
    )
    .then((players)=>{
            console.log(players);
            let template = Handlebars.compile( $('#template').html()  );
            $('.updates').append( template(players)  );
           // i++;
           
    })
    .catch (function(e) {
        console.log('error:'+ e['statusText']); 
        $('.updates').empty().append('<strong class="err">error: </strong>'+e['statusText'] ); //http://api.jquery.com/append/
    })
        setInterval("location.reload()", 100000);
       // i++;
    })
   
    

