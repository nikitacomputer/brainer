require("./style.css");
require('./assets/graphics/logo.png');



//consts and vars
//
//
//
const vocab = ['qqq', 'wwww', 'eeeee', 'rrrrrr', 'ttttttt', 'yyyyyyyy', 'uuuuuuuuu'];
const givenWord = 'aefyjo';
const givenWordArray = givenWord.split('');
const userWordListArray = [];
var score = 0;
letters = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];


let vh = window.innerHeight * 0.01;

document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});
//element calls
//
//
//
const givenWordElement = document.querySelector('.given-word');

const userWordList = document.querySelector('.user-word-list');

const scoreCounter = document.querySelector('.dash-content_score');







//filling the given word
//
//
//
function populateGivenWord (array) {

//removes all letters to refresh
  while (givenWordElement.firstChild) {
    givenWordElement.removeChild(givenWordElement.firstChild);
}
  array.forEach(letter => {
    const box = document.createElement('div');
    box.classList.add('letter-box');
    box.textContent = letter;
    givenWordElement.appendChild(box);
  });
}

//calling the populator
populateGivenWord(givenWordArray);








//shuffle letter boxes
//
//
//
function shuffleLetters (parento) {
  var parent = (parento);
  var divs = parent.children;
  var divsArray = Array.from(divs);

//randomize divs
  while (divsArray.length) {
      parent.append(divsArray.splice(Math.floor(Math.random() * divsArray.length), 1)[0]);

  }
}







//button element and mix element
//
//
//
const mixButton = document.querySelector(".dash-block_mix");
const mixConent = document.querySelector(".dash-content_mix");

//toggle button color and text
mixButton.addEventListener('click', () => {
  mixButton.classList.toggle('dash-block_mix__enabled');
  if(mixConent.innerText === "MIX"){
    mixConent.innerText = "UNMIX";
    shuffleLetters(givenWordElement);
  }else{
  mixConent.innerText= "MIX";
  populateGivenWord(givenWordArray);
}

});


givenWordArray

//key bahavior
//
//
//


const input = document.querySelector('.input-block');//input field
//activate key

function activateKey (array) {
    array.forEach(letter => {
      const key = document.getElementById(`key_${letter}`);

      key.classList.add('keyboard-key__enabled');

      const kids = key.children;

      var kidsArray = Array.from(kids);

      kidsArray.forEach(element => {
        const getclass = element.classList;
        element.classList.add(`${getclass}__enabled`);
        });

      key.addEventListener('click', () => {
          input.innerHTML += letter;
      });
     });
}

activateKey(givenWordArray);








//activate enter and delete
//
//
//
document.querySelector('.keyboard-key_enter').addEventListener('click', () => {

  const inputWord = input.innerHTML;

  if ((inputWord !== "")) {
    if (!userWordListArray.includes(inputWord)) {
      if (vocab.includes(inputWord)) {
        scoreCount(inputWord);
        const userWord = document.createElement('div');
        userWord.classList.add('user-word');
        userWord.textContent = inputWord;
        userWordList.appendChild(userWord);
        input.innerHTML = "";
        userWordListArray.push(inputWord);
        scoreCounter.innerHTML = score;
      } else {
        //error
       }
    } else {
      //error
    }
  } else {
    //error
  }
});


document.querySelector('.keyboard-key_delete').addEventListener('click', () => {
  input.innerHTML = input.innerText.slice(0, -1);
  input.innerHTML = input.innerHTML.toLowerCase( );
});


//point counter
function scoreCount (word) {
  if (word.length == 3) {
    score += 9;
  } else if (word.length == 4) {
    score += 16;
  } else if (word.length == 5) {
    score += 25;
  } else if (word.length == 6) {
    score += 36;
  } else if (word.length == 7) {
    score += 49;
  } else if (word.length == 8) {
    score += 64;
  } else if (word.length == 9) {
    score += 81;
  }
console.log(score);

}
















