// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  var past = document.querySelector(".past");
  var present = document.querySelector(".present");
  var future = document.querySelector(".future");
  var timeText = document.querySelector(".hour");
  var timeBlocks = document.querySelectorAll(".time-block");

  //jquery each function to push each hour div into an array
  //use a for loop to loop through all divs ids in the array
  //if id inner text <= current hour, set class attribute of past
  //if id inner text == current hour, set class attribute of present
  //if id inner text >= current hour, set class attribute of future
  //
 // var $timeblocks = [];

  setInterval(function() {
    var hour9 = document.querySelector("#hour-9");
    console.log(hour9);
    hour9 = 9;
    console.log(hour9);
    console.log(hour);
    if(hour >= 9) {
      document.getElementById("#hour-9").classList.add(".past");
    } else if (hour == 9) {
      document.getElementById("#hour-9").classList.add(".present");
    } else if (hour >= 9) {
      hdocument.getElementById("#hour-9").classList.add(".future");
    }}, 1000);

/*
  function callEveryHour() {
    setInterval(changeStyle, 1000);
  }

  var nextDate = new Date();
  if(nextDate.getMinutes() === 0) {
    callEveryHour()
  } else {
    nextDate.setHours(nextDate.getHours() + 1);
    nextDate.setMinutes(0);
    nextDate.setSeconds(0);

    var difference = nextDate - new Date();
    setTimeout(callEveryHour, difference);
  }*/
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  var today = dayjs();
  $('#currentDay').text(today.format('dddd, MMMM D YYYY, h:mm:ss a'));

  var hour = today.format("H");
  $("#hour").text(hour);
});
