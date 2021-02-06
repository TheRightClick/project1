

const player = {
  choice: null,
  score: 0
};

const computer = {
  choice: null, 
  score: 0
  };


const images = {
  source: [
      "https://img.pngio.com/rock-rock-paper-scissors-clipart-transparent-png-800x800-rock-paper-scissors-png-820_865.png",
      "https://www.pngitem.com/pimgs/m/266-2667252_transparent-rock-paper-scissors-clipart-rock-paper-scissors.png",
      "https://www.kindpng.com/picc/m/502-5025731_scissors-clipart-png-download-rock-paper-scissors-clipart.png",
      "https://s.clipartkey.com/mpngs/s/92-920953_transparent-cute-mouth-png-cartoon-dog-face-black.png"
  ]
}

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
  console.log(player.score)
  console.log(computer.score)
};

function paper() {
 resultsDiv.removeChild(resultsDiv.childNodes[0, 1]);
 player.choice = choices[1] ;
 computerChooses();
 compareChoices();
 console.log(player.score)
  console.log(computer.score)
};

function scissors() {
  resultsDiv.removeChild(resultsDiv.childNodes[0, 1]);
  player.choice = choices[2] ;
  computerChooses();
  compareChoices();
  console.log(player.score)
  console.log(computer.score)
};

function rest() {
  let results = document.createElement("h1");
  resultsDiv = document.getElementById('resultsDiv');
  results.textContent = ("Let's get ready to rumble!")
  document.getElementById('resultsDiv').appendChild(results);
  const btn1 = document.getElementById('#rock')
  const btn2 = document.getElementById('#paper')
  const btn2 = document.getElementById('#scissors')

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
    computer.score += 1
  
} else {
    results.textContent = ("The player wins! The computer chose " + computer.choice + ", the player chose " + player.choice)
  document.getElementById('resultsDiv').appendChild(results);
  player.score +=1
}
}

function addChoices() {
  if(player.score > 5){
    const div = document.createElement('div')
    const gamArea = document.getElementById('#gameArea')
    div.addClass('Option')
    gameArea.appendChild(div)
    
  }
}
rest();
addChoices();
document.getElementById('rock').onclick = rock;
document.getElementById('paper').onclick = paper;
document.getElementById('scissors').onclick = scissors;





$(() => {
   
  })