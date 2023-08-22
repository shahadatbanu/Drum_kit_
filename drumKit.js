// another method of add event listner
// const drumButton = document.querySelector(".set");
// drumButton.addEventListener("click", function () {
//   alert("hello");
// });
var buttonOfDrum = document.querySelectorAll(".drum").length;
for (var i = 0; i < buttonOfDrum; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttoninnerHtml = this.innerHTML;
    makeSound(buttoninnerHtml);
    buttonAnimation(buttoninnerHtml);
  });
}
document.addEventListener("keypress", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("audio-file/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("audio-file/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("audio-file/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("audio-file/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("audio-file/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("audio-file/crash.mp3");
      crash.play();
      break;
    case "l":
      var kick = new Audio("audio-file/kick-bass.mp3");
      kick.play();
      break;
    default:
      console.log(buttoninnerHtml);
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed"), 100;
  });
}

// add event listner a single button
// document.querySelector("button").addEventListener("click", function () {
//   alert("hello");
// });
