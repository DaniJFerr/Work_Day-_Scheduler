$(document).ready(function() {
    // Display current day at the top of the calendar
    $("#currentDay").text(moment().format("dddd, MMMM Do"));

//color-code each timeblock based on past, present and future 

  var currentHour = moment().hours();
  $(".description").each(function(){
    var bloclHour = parseInt($(this).attr("id").split("am"));
    if (bloclHour < currentHour){
      $(this).addClass("past");
    }else if (bloclHour === currentHour){
      $(this).addClass("present");
    }else{
      $(this).addClass("future");
    }
    console.log(this);

  });

  

  });

