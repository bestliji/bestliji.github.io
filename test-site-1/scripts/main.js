//const myHeading = document.querySelector('h1')
//myHeading.textContent = 'Hello world!'

/*
document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!')
}
*/

let myImage = document.querySelector('img')

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src')
    if(mySrc === 'images/Ji-Head-Shoulders.png') {
        myImage.setAttribute('src', 'images/Ji-family.png')
    } else {
        myImage.setAttribute('src', 'images/Ji-Head-Shoulders.png')
    }
}

let myButton = document.querySelector('button')
let myHeading = document.querySelector('h1')

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName()
    } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Fun place, ' + myName;
    }
}

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Fun place, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }