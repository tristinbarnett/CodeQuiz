$(document).ready(function() {

   
    $("#startButton").on("click", function(){
        var timer = $("#timer");
        timer = 60;    
        for (i = 0; i <= 60; i++){
           timer--
        $("#timer").html(timer);
        }
    })


});