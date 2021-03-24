const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
var pattern = [2, 2, 4, 3, 2, 1, 2, 4];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;
var clueHoldTime = 1000;
var guesses = 0;
var guessTime;
var timeLeft = 10;
var timeLeftInterval;


function startGame(){
    //initialize game variables
    progress = 0;
    guesses = 0;
    gamePlaying = true;
    clueHoldTime = 1000;
    getRandomPattern();
    document.getElementById("timeRemaining").innerHTML = timeLeft;
    document.getElementById("startBtn").classList.add("hidden");
    document.getElementById("stopBtn").classList.remove("hidden");
    document.getElementById("timeLabel").classList.remove("hidden");
    document.getElementById("timeRemaining").classList.remove("hidden");
    playClueSequence();
}

function getRandomPattern(){
    pattern = [];
    for (let i=0; i<=6; i++){
      pattern.push((Math.floor(Math.random() * Math.floor(6)))+1);
    }
  console.log(pattern);
}

function updateTime(){
  timeLeft-=1;
  document.getElementById("timeRemaining").innerHTML = timeLeft;
}

function stopGame(){
    gamePlaying = false;
    clearInterval(guessTime);
    clearInterval(timeLeftInterval);
    timeLeft = 10;
    document.getElementById("startBtn").classList.remove("hidden");
    document.getElementById("stopBtn").classList.add("hidden");
    document.getElementById("timeLabel").classList.add("hidden");
    document.getElementById("timeRemaining").classList.add("hidden");
}

// Sound Synthesis Functions
const freqMap = {
  1: 100.6,
  2: 200.6,
  3: 300,
  4: 466.2,
  5: 500.2,
  6: 550.2
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
  clueHoldTime-=140
  guessTime = setInterval(loseGame, 10000);
  timeLeftInterval = setInterval(updateTime, 1000);
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("Game Over. You won!");
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  // add game logic here
  if(pattern[guessCounter] == btn) {
    if (progress != guessCounter) {
      guessCounter+=1;
    } else if (progress == pattern.length - 1) {
      winGame();
    } else {
      progress+=1;
      clearInterval(guessTime);
      clearInterval(timeLeftInterval);
      timeLeft = 10;
      document.getElementById("timeRemaining").innerHTML = timeLeft;
      guesses = 0;
      playClueSequence();
    }
  } else if (guesses == 2){
    loseGame();
  } else {
    guesses += 1;
  }
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)