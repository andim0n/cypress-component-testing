const timerDisplay = document.querySelector('.timer');
let startTime;
let updatedTime;
let difference;
let tInterval;

function startTimer() {
  startTime = new Date().getTime();
  tInterval = setInterval(updateTime, 1000);
}

startTimer()

function updateTime(){
  updatedTime = new Date().getTime();
  difference =  updatedTime - startTime;

  var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((difference % (1000 * 60)) / 1000);

  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;
  timerDisplay.innerHTML = hours + ':' + minutes + ':' + seconds;
}