
$(function () {

  $(".saveBtn").click(function() {
    var hourDiv = $(this).parent().attr("id");
    var hourText = $(this).parent().children("textarea").val();
    localStorage.setItem(hourDiv, hourText);
  });

  var notes9am = localStorage.getItem("hour-9");
  if(notes9am !== null) {
    $("#hour-9 textarea").val(notes9am);
  };
  var notes10am = localStorage.getItem("hour-10");
  if(notes10am !== null) {
    $("#hour-10 textarea").val(notes10am);
  };
  var notes11am = localStorage.getItem("hour-11");
  if(notes11am !== null) {
    $("#hour-11 textarea").val(notes11am);
  };
  var notes12pm = localStorage.getItem("hour-12");
  if(notes12pm !== null) {
    $("#hour-12 textarea").val(notes12pm);
  };
  var notes1pm = localStorage.getItem("hour-13");
  if(notes1pm !== null) {
    $("#hour-13 textarea").val(notes1pm);
  };
  var notes2pm = localStorage.getItem("hour-14");
  if(notes2pm !== null) {
    $("#hour-14 textarea").val(notes2pm);
  };
  var notes3pm = localStorage.getItem("hour-15");
  if(notes3pm !== null) {
    $("#hour-15 textarea").val(notes3pm);
  }; 
  var notes4pm = localStorage.getItem("hour-16");
  if(notes4pm !== null) {
    $("#hour-16 textarea").val(notes4pm);
  };
  var notes5pm = localStorage.getItem("hour-17");
  if(notes5pm !== null) {
    $("#hour-17 textarea").val(notes5pm);
  };
  var notes6pm = localStorage.getItem("hour-18");
  if(notes6pm !== null) {
    $("#hour-18 textarea").val(notes6pm);
  }; 

  var today = dayjs();
  $('#currentDay').text(today.format('dddd, MMMM D YYYY'));
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
