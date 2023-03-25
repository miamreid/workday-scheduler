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
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //

  var today = dayjs();
  $('#currentDay').text(today.format('dddd, MMMM D YYYY, h:mm:ss a'));
  var hour = dayjs().hour();
  var hourEl = $(".hour");
  var hourEls = ["#hour-9", "#hour-10", "#hour-11", "#hour-12", "#hour-13", "#hour-14", "#hour-15", "#hour-16", "#hour-17", "#hour-18"];

  function timeBlocks() {
  if(hour < 9) {
    for(i = 0; i < hourEl.length; i++) {
      $(hourEls[i]).addClass("future");
    }
  }
  if(hour == 9) {
    for(i = 1; i <hourEl.length; i++) {
      $(hourEls[i]).addClass("future");
    }
  }
  if (hour == 10) {
    for(i = 2; i < hourEl.length; i++) {
      $(hourEls[i]).addClass("future");
    }
    $(hourEls[0]).addClass("past").removeClass("present");
  }
  if (hour == 11) {
    for(i = 3; i < hourEl.length; i++) {
      $(hourEls[i]).addClass("future");
    }
    for (i = 0; i < 2; i++) {
      $(hourEls[i]).addClass("past").removeClass("present");
    }
  }
  if (hour == 12) {
    for(i = 4; i < hourEl.length; i++) {
      $(hourEls[i]).addClass("future");
    }
    for (i = 0; i < 3; i++) {
      $(hourEls[i]).addClass("past").removeClass("present");
    }
  }
  if (hour == 13) {
    for(i = 5; i < hourEl.length; i++) {
      $(hourEls[i]).addClass("future");
    }
    for (i = 0; i < 4; i++) {
      $(hourEls[i]).addClass("past").removeClass("present");
    }
  }
  if (hour == 14) {
    for(i = 6; i < hourEl.length; i++) {
      $(hourEls[i]).addClass("future");
    }
    for (i = 0; i < 5; i++) {
      $(hourEls[i]).addClass("past").removeClass("present");
    }
  }
  if (hour == 15) {
    for(i = 7; i < hourEl.length; i++) {
      $(hourEls[i]).addClass("future");
    }
    for (i = 0; i < 6; i++) {
      $(hourEls[i]).addClass("past").removeClass("present");
    }
  }
  if (hour == 16) {
    for(i = 8; i < hourEl.length; i++) {
      $(hourEls[i]).addClass("future");
    }
    for (i = 0; i < 7; i++) {
      $(hourEls[i]).addClass("past").removeClass("present");
    }
  }
  if (hour == 17) {
    for(i = 9; i < hourEl.length; i++) {
      $(hourEls[i]).addClass("future");
    }
    for (i = 0; i < 8; i++) {
      $(hourEls[i]).addClass("past").removeClass("present");
    }
  }
  if (hour == 18) {
    for (i = 0; i < 9; i++) {
      $(hourEls[i]).addClass("past").removeClass("present");
    }
  }
  if (hour > 18) {
    for(i = 0; i < hourEl.length; i++) {
      $(hourEls[i]).addClass("past").removeClass("present");
    }
  }
  };
timeBlocks(); 
});
