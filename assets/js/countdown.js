var deadline = 'September 17 2016 23:59:59 GMT-06:00';

function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor( (t/1000) % 60 );
  var minutes = Math.floor( (t/1000/60) % 60 );
  var hours = Math.floor( (t/(1000*60*60)) % 24 );
  var days = Math.floor( t/(1000*60*60*24) );
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime){
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');
  function updateClock() {
    var t = getTimeRemaining(endtime);
    
    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = t.hours;
    minutesSpan.innerHTML = t.minutes;
    secondsSpan.innerHTML = t.seconds;

    if (t.total <= 0) {
      clearInterval(timeInterval);
    }
  }
  updateClock();
  var timeInterval = setInterval(updateClock, 1000);
}

initializeClock('countdown', deadline);

var counter = 0;
function addGuest() {
  var newGuest = document.createElement('section');
  newGuest.setAttribute("class", "newGuest row uniform");
  newGuest.setAttribute("id", "guest" + counter);
  newGuest.innerHTML = "<div class='6u 12u$(xsmall)'><input type='text' name='name[]' id='guest-name' value='' placeholder='Name'></div><div class='6u$ 12u$(xsmall)'><input type='email' name='email' id='email' value='' placeholder='Email'></div><div class='4u 12u$(small)'><input type='radio' id='option1" + counter + "' name='foodOption" + counter + "' checked><label for='option1" + counter + "'>Chicken</label></div><div class='4u 12u$(small)'><input type='radio' id='option2" + counter + "' name='foodOption" + counter + "'><label for='option2" + counter + "'>Fish</label></div><div class='4u$ 12u$(small)'><input type='radio' id='option3" + counter + "' name='foodOption" + counter + "'><label for='option3" + counter + "'>Veg</label></div>";
  document.getElementById("formRepeat").appendChild(newGuest);
  counter++;
  if (counter > 0) {
    document.getElementById("rmGuest").style.display = "inline-block";
  }
  else {
    document.getElementById("rmGuest").style.display = "none";
  }
}

function rmGuest() {
  var form = document.getElementById("formRepeat");
  var current = counter - 1;
  var guest = document.getElementById("guest" + current);
  form.removeChild(guest);
  counter--;
  if (counter > 0) {
    document.getElementById("rmGuest").style.display = "inline-block";
  }
  else {
    document.getElementById("rmGuest").style.display = "none";
  }
}