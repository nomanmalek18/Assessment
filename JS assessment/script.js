function showOptions() {
    var bookingType = document.getElementById("bookingType").value;
    var dateDiv = document.getElementById("dateDiv");
    var timeSlotDiv = document.getElementById("timeSlotDiv");
    var timeDiv = document.getElementById("timeDiv");

    dateDiv.style.display = "none";
    timeSlotDiv.style.display = "none";
    timeDiv.style.display = "none";

    if (bookingType === "fullDay") {
      dateDiv.style.display = "block";
    } else if (bookingType === "halfDay") {
      dateDiv.style.display = "block";
      timeSlotDiv.style.display = "block";
    } else if (bookingType === "hourly") {
      dateDiv.style.display = "block";
      timeDiv.style.display = "block";
    }
  }