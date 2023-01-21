// dice 1

let randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; // dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; // images/dice1.png - images/dice2.png

var image1 = document.querySelectorAll("img")[0]; 

image1.setAttribute("src", randomImageSource);


// dice 2

let randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);



// change html to decide who wins

if (randomNumber1 > randomNumber2) {
    document.querySelector('h1').innerHTML = "Player 1 wins!";
    document.querySelector('h1').style.color = "darkgoldenrod";
}

else if (randomNumber2 > randomNumber1) {
    document.querySelector('h1').innerHTML = "Player 2 wins!";
    document.querySelector('h1').style.color = "aquamarine";
}

else {
    document.querySelector('h1').innerHTML = "Draw.";
    document.querySelector('h1').style.color = "ivory";
}

