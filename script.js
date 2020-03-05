$(document).ready(function() {
  if (localStorage.hasOwnProperty("9am")) {
    var storedText = localStorage.getItem("9am");
    $("#9am").val(storedText);
  }
  if (localStorage.hasOwnProperty("10am")) {
    var storedText = localStorage.getItem("10am");
    $("#10am").val(storedText);
  }
  if (localStorage.hasOwnProperty("11am")) {
    var storedText = localStorage.getItem("11am");
    $("#11am").val(storedText);
  }
  if (localStorage.hasOwnProperty("12pm")) {
    var storedText = localStorage.getItem("12pm");
    $("#12pm").val(storedText);
  }
  if (localStorage.hasOwnProperty("1pm")) {
    var storedText = localStorage.getItem("1pm");
    $("#1pm").val(storedText);
  }
  if (localStorage.hasOwnProperty("2pm")) {
    var storedText = localStorage.getItem("2pm");
    $("#2pm").val(storedText);
  }
  if (localStorage.hasOwnProperty("3pm")) {
    var storedText = localStorage.getItem("3pm");
    $("#3pm").val(storedText);
  }
  if (localStorage.hasOwnProperty("4pm")) {
    var storedText = localStorage.getItem("4pm");
    $("#4pm").val(storedText);
  }
  if (localStorage.hasOwnProperty("5pm")) {
    var storedText = localStorage.getItem("5pm");
    $("#5pm").val(storedText);
  }

  $(".save").on("click", function(event) {
    event.preventDefault();

    var textbox = $(this)
      .parent()
      .prev()
      .children();
    var text = textbox.val();
    var textid = textbox.attr("id");
    localStorage.setItem(textid, text);
  });
  var currentHour = Number.parseInt(moment().format("H"));
  var rows = document.querySelectorAll("[data-hour]");
  // console.log(rows);
  // console.log(currentHour);
  for (var i = 0; i < rows.length; i++) {
    var rowHour = Number.parseInt(rows[i].getAttribute("data-hour"));
    if (rowHour < currentHour) {
      var textArea = rows[i].querySelector(".input textarea");
      textArea.style.backgroundColor = "red";
      console.log("1. in here");
    } else if (rowHour === currentHour) {
      var textArea = rows[i].querySelector(".input textarea");
      console.log("2. in here");
      textArea.style.backgroundColor = "grey";
    } else {
      var textArea = rows[i].querySelector(".input textarea");
      textArea.style.backgroundColor = "green";
    }
  }
});
