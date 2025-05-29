const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");
let timeP = document.getElementById("timeP");

let startTime = 0;
let elapsedTime = 0;
let timer = null;
let isRunning = false;

startBtn.onclick = function (){
  if(!isRunning){
    timer = setInterval(displayTime, 10);
    startTime = Date.now() - elapsedTime;
    isRunning = true;
  }

};

stopBtn.onclick = function(){
  if(isRunning){
    clearInterval(timer);
    elapsedTime = Date.now() - startTime;
    isRunning = false;
  }

};

resetBtn.onclick = function(){
  clearInterval(timer);
  startTime = 0;
  elapsedTime = 0;
  timeP.textContent = `00:00:00:00`;
  isRunning = false;

}

function displayTime(){
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;
  
  let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
  let minutes = Math.floor(elapsedTime / (1000 * 60)) % 60;
  let seconds = Math.floor(elapsedTime / 1000) % 60;
  let mseconds = Math.floor((elapsedTime % 1000) / 10);

  hours = hours.toString().padStart(2, 0);
  minutes = minutes.toString().padStart(2, 0);
  seconds = seconds.toString().padStart(2, 0);
  mseconds = mseconds.toString().padStart(2, 0);

  timeP.textContent = `${hours}:${minutes}:${seconds}:${mseconds}`;
}

