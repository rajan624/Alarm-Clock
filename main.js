var sound = new Audio("./Alarm.mp3");
sound.loop = true;

var h3 = document.getElementById("current-time");

function addZero(time) {
  return time < 10 ? "0" + time : time;
}
// function to get current time
function getCurrentTime() {
   var date = new Date();
   console.log(date.getHours());

   var hours = date.getHours() % 12;
   // var hours = date.getHours();

   var minutes = date.getMinutes();

   var seconds = date.getSeconds();

   var ampm = date.getHours() < 12 ? "AM" : "PM";

   //convert military time to standard time

   if (hours == 00) {
     hours = 12;
   } else {
     hours = hours;
   }
   console.log("current time"+
     addZero(hours) +
       ":" +
       addZero(minutes) +
       ":" +
       addZero(seconds) +
       "" +
       ampm
  );
   return (
       addZero(hours) +
       ":" +
       addZero(minutes) +
       ":" +
       addZero(seconds) +
       "" +
       ampm)
}
function setAlarmFunction() {
  var hour = document.getElementById("alarm-hour-time");

  var minute = document.getElementById("alarm-minute-time");

  var seconds = document.getElementById("alarm-second-time");

  var ampm = document.getElementById("alarm-am-pm-time");

  var selectedHour = hour.options[hour.selectedIndex].value;
  var selectedMinutes = minute.options[minute.selectedIndex].value;
  var selectedSecond = seconds.options[seconds.selectedIndex].value;
  var selectedAPPM = ampm.options[ampm.selectedIndex].value;

  var alarmTime =
    addZero(selectedHour) +
    ":" +
    addZero(selectedMinutes) +
    ":" +
    addZero(selectedSecond) +
    selectedAPPM;
  console.log("alarmTime:" + alarmTime);

  document.getElementById("alarm-hour-time").disabled = true;
  document.getElementById("alarm-minute-time").disabled = true;
  document.getElementById("alarm-second-time").disabled = true;
  document.getElementById("alarm-am-pm-time").disabled = true;

  //when alarmtime is equal to currenttime then play a sound
  var h3 = document.getElementById("current-time");

  /*function to calcutate the current time 
then compare it to the alarmtime and play a sound when they are equal
*/

  setInterval(function () {
    var currentTime = (h3.textContent = getCurrentTime());

    if (alarmTime == currentTime) {
      sound.play();
    }
  }, 1000);

  // console.log('currentTime:' + currentTime);
}

function removeAlarmFunction() {
  document.getElementById("alarm-hour-time").disabled = false;
  document.getElementById("alarm-minute-time").disabled = false;
  document.getElementById("alarm-second-time").disabled = false;
  document.getElementById("alarm-am-pm-time").disabled = false;
  sound.pause();
}


// display current time by the second
var currentTime = setInterval(function () {
 
  h3.textContent = getCurrentTime();
}, 1000);

function hoursMenu() {
  var select = document.getElementById("alarm-hour-time");
  var hrs = 12;

  for (i = 1; i <= hrs; i++) {
    select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);
  }
}
hoursMenu();

function minMenu() {
  var select = document.getElementById("alarm-minute-time");
  var min = 59;

  for (i = 0; i <= min; i++) {
    select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);
  }
}
minMenu();

function secMenu() {
  var select = document.getElementById("alarm-second-time");
  var sec = 59;

  for (i = 0; i <= sec; i++) {
    select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);
  }
}
secMenu();

