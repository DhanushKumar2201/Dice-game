var randomNum1 = Math.floor(Math.random() * 6) + 1;

var randomImageSource = "images/dice" + randomNum1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);

var randomNum2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNum2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (randomNum1 > randomNum2) {
    document.querySelector("h1").innerHTML = "🎉 player 1 wins";
} else if (randomNum2 > randomNum1) {
    document.querySelector("h1").innerHTML = "🎉 player 2 wins";
} else {
    document.querySelector("h1").innerHTML = "Draw!!!";
}