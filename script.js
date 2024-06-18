let timer;
let minutes = 25;
let seconds = 0;
let isWorking = false;

const timeDisplay = document.getElementById('time');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');
const pomodoroButton = document.getElementById('pomodoro');
const shortBreak = document.getElementById('shortBreak');
const longBreak = document.getElementById('longBreak');


function updateTime() {
    timeDisplay.textContent = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function startTimer() {
    if (isWorking) return;
    isWorking = true;
    timer = setInterval(() => {
        if (seconds === 0) {
            if (minutes === 0) {
                clearInterval(timer);
                isWorking = false;
                alert("Time's up!");
                alert("Refresh!")
            } else {
                minutes--;
                seconds = 59;
            }
        }
         else {
            seconds--;
        }
        
        updateTime();
    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
    isWorking = false;
}

function resetTimer(){
    minutes = 25;
    seconds = 0;
    isWorking = false;
}

// function setPomodoro() {
//     minutes = 25;
//     seconds = 0;
//     updateTime();
// }

function setShortBreak() {
    console.log('Hey');
    minutes = 5;
    seconds = 0;
    updateTime();
}



function setLongBreak() {
    minutes = 15;
    seconds = 0;
    updateTime();
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer)
// pomodoroButton.addEventListener('click', setPomodoro);
shortBreak.addEventListener('click', setShortBreak);
longBreak.addEventListener('click', setLongBreak);


