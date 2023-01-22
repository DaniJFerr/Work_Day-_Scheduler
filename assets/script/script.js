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
  //Repeat the above line of code for each hour from 9am to 5pm
    $("#9am").val(localStorage.getItem("9am"));
    $("#10am").val(localStorage.getItem("10am"));
    $("#11am").val(localStorage.getItem("11am"));
    $("#12am").val(localStorage.getItem("12am"));
    $("#13pm").val(localStorage.getItem("13pm"));
    $("#14pm").val(localStorage.getItem("14pm"));
    $("#15pm").val(localStorage.getItem("15pm"));
    $("#16pm").val(localStorage.getItem("16pm"));
    $("#17pm").val(localStorage.getItem("17pm"));

  });

