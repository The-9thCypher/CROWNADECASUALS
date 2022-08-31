function myFunc(){
    alert("Please wait, this should take less than a minute");
  } 

var express= require("express");
var app= express();


  var server = app.listen(8000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at https://%s:%s", host, port);
  });
