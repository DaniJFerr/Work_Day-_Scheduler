$(document).ready(function() {
  let currentHour = new Date().getHours();

  $("#currentDay").text(moment().format("dddd, MMMM Do"));

  // Create timeblocks for each hour from 9am to 5pm
  for (let i = 9; i <= 17; i++) {
    let hour = i <= 12 ? `${i}am` : `${i - 12}pm`;
    let timeblock = $("<div>").addClass("row");

    let time = $("<div>").addClass("col-sm-1 hour").text(hour);
    timeblock.append(time);

    let event = $("<input>").addClass("col-sm-10 description");
    timeblock.append(event);

    let saveBtn = $("<button>").addClass("col-sm-1 saveBtn fa-solid fa-floppy-disk");
    timeblock.append(saveBtn);
    
    $("#timeblocks").append(timeblock);

    // Check if timeblock is past, present, or future
    if (i < currentHour) {
      event.addClass("past");
    } else if (i === currentHour) {
      event.addClass("present");
    } else {
      event.addClass("future");
    }

    // Save event in local storage when save button is clicked
    saveBtn.click(function() {
      localStorage.setItem(hour, event.val());
    });

    // Retrieve and display saved events when page is refreshed
    event.val(localStorage.getItem(hour));
  }
});

