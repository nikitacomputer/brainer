require("./style.css");
require('./assets/graphics/logo.png');

//entry point for the given word
//
//
//
const givenWord = 'gnome';
const givenWordArray = givenWord.split('');

//getting givenWord element
const givenWordElement = document.querySelector('.given-word');








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

//activate enter and delete

// document.querySelector('.keyboard-key_enter').addEventListener('click', () => {

// });

document.querySelector('.keyboard-key_delete').addEventListener('click', () => {
  input.innerHTML = input.innerText.slice(0, -1);
});



activateKey(givenWordArray);











