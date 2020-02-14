$(document).ready(function() {
    

    $("#questionOne").hide();
    $("#inputName").hide();
   
    $("#startButton").on("click", function(){
      $("#instructions").hide();
      $("#questionOne").show();
      var timeleft = 60;
    var timer = setInterval(function(){
      document.getElementById("timer").innerHTML = timeleft;
      timeleft -= 1;
      if(timeleft < 0){
        clearInterval(timer);
        $("#questionOne").hide();
        $("#inputName").show();
      }
    }, 1000);
    })


      
});