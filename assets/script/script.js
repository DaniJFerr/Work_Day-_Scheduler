$(document).ready(function() {
    // Display current day at the top of the calendar
    $("#currentDay").text(moment().format("dddd, MMMM Do"));

//color-code each timeblock based on past, present and future 

 let currentHour = moment().hours();
  $(".description").each(function(){
   let bloclHour = parseInt($(this).attr("id").split("am"));
    if (bloclHour < currentHour){
      $(this).addClass("past");
    }else if (bloclHour === currentHour){
      $(this).addClass("present");
    }else{
      $(this).addClass("future");
    }
  });

//save event when the button is clicked 
  $(".saveBtn").on("click" , function(){
    let event = $(this).prev().val();
    let time = $(this).attr("id").split("-")[0];
    localStorage.setItem(time, event);
  });

  // Retrieve and display saved events when page is refreshed
    $("#9am").val(localStorage.getItem("9am"));
  });

