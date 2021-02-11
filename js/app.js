let choices = []

let rockItem = document.getElementById('rock');
let paperItem = document.getElementById('paper');
let scissorsItem = document.getElementById('scissors');



const player = {
  choice: null,
  score: 0
};

const computer = {
  choice: null, 
  score: 0
  };

const imgs = [
     {  
      rock: "https://img.pngio.com/rock-rock-paper-scissors-clipart-transparent-png-800x800-rock-paper-scissors-png-820_865.png",
      paper:  "https://www.pngitem.com/pimgs/m/266-2667252_transparent-rock-paper-scissors-clipart-rock-paper-scissors.png",
      scissors: "https://www.kindpng.com/picc/m/502-5025731_scissors-clipart-png-download-rock-paper-scissors-clipart.png" 
    },
    {
      dog: "https://s.clipartkey.com/mpngs/s/92-920953_transparent-cute-mouth-png-cartoon-dog-face-black.png",
      cat:  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2DmYjikawtjmk7ZBtOHdXvcO_BGEVbPWqxw&usqp=CAU",
      raccoon: "https://static.thenounproject.com/png/2505434-200.png"
    },
    {
    'gallo claudio': "https://i.pinimg.com/originals/86/55/d6/8655d69e70120441d9a4a4e1d4fd099b.gif",
    'gallo del ciello':"https://pixy.org/src/468/4682865.png",
    zoro: "https://cdn.pixabay.com/photo/2017/01/31/13/32/animals-2024072__340.png"
    }
  ]

class Game {
  constructor (modeImgs) {
      choices = [Object.keys(modeImgs)[0],Object.keys(modeImgs)[1],Object.keys(modeImgs)[2]]
      let img1 = Object.values(modeImgs)[0]
      let img2 = Object.values(modeImgs)[1]
      let img3 = Object.values(modeImgs)[2]
      rockItem.style.backgroundImage = `url(${img1})`
      paperItem.style.backgroundImage = `url(${img2})`
      scissorsItem.style.backgroundImage = `url(${img3})`
      let  results = document.createElement("h1");
      // let resultsDiv = document.getElementById('resultsDiv');
      results.textContent = ("Let's get ready to rumble!");
      document.getElementById('resultsDiv').appendChild(results);
  }
}


const changeGame = (imgSet) =>{
  modeNum = new Game (imgSet)
}  



function computerChooses() {
  let randomNumberComputer = Math.floor(Math.random() * 3);
  computer.choice = choices[randomNumberComputer];
  
}

function rock() {
  resultsDiv.removeChild(resultsDiv.childNodes[0, 1]);
  player.choice = choices[0];
  computerChooses();
  compareChoices();
  document.getElementById('playerScore').innerText = player.score
  document.getElementById('computerScore').innerText = computer.score
};

function paper() {
 resultsDiv.removeChild(resultsDiv.childNodes[0, 1]);
 player.choice = choices[1] ;
 computerChooses();
 compareChoices();
 document.getElementById('playerScore').innerText = player.score
 document.getElementById('computerScore').innerText = computer.score
};

function scissors() {
  resultsDiv.removeChild(resultsDiv.childNodes[0, 1]);
  player.choice = choices[2] ;
  computerChooses();
  compareChoices();
  document.getElementById('playerScore').innerText = player.score
  document.getElementById('computerScore').innerText = computer.score
};

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


changeGame(imgs[0], "mode1")
document.getElementById('rock').onclick = rock;
document.getElementById('paper').onclick = paper;
document.getElementById('scissors').onclick = scissors;

document.getElementById("mode2").addEventListener("click", function() {
  resultsDiv.removeChild(resultsDiv.childNodes[0, 1]);
  changeGame(imgs[1]);
})

document.getElementById("mode1").addEventListener("click", function() {
  resultsDiv.removeChild(resultsDiv.childNodes[0, 1]);
  changeGame(imgs[0]);
})
document.getElementById("mode3").addEventListener("click", function() {
  resultsDiv.removeChild(resultsDiv.childNodes[0, 1]);
  changeGame(imgs[2]);
})

document.getElementById('playerScore').innerText = player.score
document.getElementById('computerScore').innerText = computer.score

