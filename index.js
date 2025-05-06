var arr = [];
var front = -1,
  rear = 0;
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var tom = this.innerHTML;
    drumSound(tom);
  });
}
document.addEventListener("keypress", function (event) {
  var tom1 = event.key;
  drumSound(tom1);
});

document.querySelector(".play").addEventListener("click", function () {
  var start = 0;
  var timer = setInterval(function () {
   if (start > arr.length - 1) {
      handle();
    }
   else {
      arr[start].play();
      start++;
    } }, 150);
  function handle() {
    clearInterval(timer);
  }
  if (arr.length > 0) {
    document.querySelector(".play").innerHTML = "Replay";
  }
});
document.querySelector(".reset").addEventListener("click", function () {
  arr = [];
  front = -1;
  document.querySelector(".play").innerHTML = "Play";
});

function drumSound(tom) {
  var audio;
  if (tom === "w") {
    audio = new Audio("sounds/tom-1.mp3");
    audio.play();
    ++front;
    arr[front] = audio;
  } else if (tom === "a") {
    audio = new Audio("sounds/tom-2.mp3");
    audio.play();
    ++front;
    arr[front] = audio;
  } else if (tom === "s") {
    audio = new Audio("sounds/tom-3.mp3");
    audio.play();
    ++front;
    arr[front] = audio;
  } else if (tom === "d") {
    audio = new Audio("sounds/tom-4.mp3");
    audio.play();
    ++front;
    arr[front] = audio;
  } else if (tom === "j") {
    audio = new Audio("sounds/snare.mp3");
    audio.play();
    ++front;
    arr[front] = audio;
  } else if (tom === "k") {
    audio = new Audio("sounds/crash.mp3");
    audio.play();
    ++front;
    arr[front] = audio;
  } else {
    audio = new Audio("sounds//kick-bass.mp3");
    audio.play();
    ++front;
    arr[front] = audio;
  }
}
