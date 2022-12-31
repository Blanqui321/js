

//dice problem

document.querySelector(".diceBtn").addEventListener("click", function() {
    var changeColor = document.querySelector(".diceBtn");
    changeColor.classList.add("diceBtn2");
    setTimeout(function() {
  changeColor.classList.remove("diceBtn2")
}, 300);
   

    var randomNumber1 = Math.floor(Math.random() * 6) + 1; 
    document.querySelectorAll("img")[0].setAttribute("src", "images/dice" + randomNumber1 + ".png");
    
    var randomNumber2 = (Math.floor(Math.random() *6) + 1);
document.querySelectorAll("img")[1].setAttribute("src", "images/dice" + randomNumber2 + ".png");

if(randomNumber1 > randomNumber2) {
    document.querySelector("h1.dice-title").innerHTML = "🚩 Player 1 wins";
} else if(randomNumber2 > randomNumber1) {
    document.querySelector("h1.dice-title").innerHTML = "Player 2 wins 🚩";
} else {
    document.querySelector("h1.dice-title").innerHTML = "Draw!";
}
});






//drum kit problem

var numberOfButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
     var buttonInnerHTML = this.innerHTML;

     //buttonpress
       makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
    
}


//keypress
document.addEventListener("keypress", function() {
    makeSound(event.key);
    buttonAnimation(event.key);
});

//switch statement ot select which button was pressed
function makeSound(key) {
    switch (key) {
        case "f":
            var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
            break;
            case "a":
            var audio = new Audio("sounds/tom-2.mp3");
    audio.play();
            break;
            case "s":
            var audio = new Audio("sounds/tom-3.mp3");
    audio.play();
            break;
            case "d":
            var audio = new Audio("sounds/tom-4.mp3");
    audio.play();
            break;
            case "j":
            var audio = new Audio("sounds/snare.mp3");
    audio.play();
            break;
            case "k":
            var audio = new Audio("sounds/crash.mp3");
    audio.play();
            break;
            case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
    audio.play();
            break;
        default: console.log(buttonInnerHTML);
    }
}



function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}

