function myFunc(){
  var link = "mailto: shyllonolayinka608@gmail.com"
  +"?subject=" + encodeURIComponent("Order to Crownade Casuals")
  ;
  window.location.href = link;
  } 

var express= require("express");
var app= express();

  var server = app.listen(8000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at https://%s:%s", host, port);
  });
