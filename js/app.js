

const player = {
  choice: null,
  score: null
};

const computer = {
  choice: null, 
  score: null
  };

const choices = ["Rock","Paper", "Scissors"];


function computerChooses() {
  let randomNumberComputer = Math.floor(Math.random() * 3);
  //let randomNumberPlayer = Math.floor(Math.random() * 3);
  computer.choice = choices[randomNumberComputer];
  //player.choice = choices[randomNumberPlayer];
}

function rock() {
  resultsDiv.removeChild(resultsDiv.childNodes[0, 1]);
  player.choice = choices[0];
  computerChooses();
  compareChoices();
};

function paper() {
 resultsDiv.removeChild(resultsDiv.childNodes[0, 1]);
 player.choice = choices[1] ;
 computerChooses();
 compareChoices();
};

function scissors() {
  resultsDiv.removeChild(resultsDiv.childNodes[0, 1]);
  player.choice = choices[2] ;
  computerChooses();
  compareChoices();
};

function rest() {
  let results = document.createElement("h1");
  resultsDiv = document.getElementById('resultsDiv');
  results.textContent = ("Let's get ready to rumble!")
  document.getElementById('resultsDiv').appendChild(results);
}

function compareChoices() {
  let results = document.createElement("h1");
  resultsDiv = document.getElementById('resultsDiv');
  document.getElementById('resultsDiv').appendChild(results);
   if (computer.choice === player.choice) {
    results.textContent = ("It's a draw")
    document.getElementById('resultsDiv').appendChild(results);
  } else if 
  (computer.choice === choices[0] && player.choice === choices[2] || computer.choice === choices[2] && player.choice === choices[1] ||   computer.choice === choices[1] && player.choice === choices[0]) {
 results.textContent = ("The computer wins! The computer chose " + computer.choice + ", the player chose " + player.choice)
    document.getElementById('resultsDiv').appendChild(results);
  
} else {
    results.textContent = ("The player wins! The computer chose " + computer.choice + ", the player chose " + player.choice)
  document.getElementById('resultsDiv').appendChild(results);
 
}
}
rest();
document.getElementById('rock').onclick = rock;
document.getElementById('paper').onclick = paper;
document.getElementById('scissors').onclick = scissors;





$(() => {
   
  })