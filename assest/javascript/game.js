// Create an array of Words
var phrases = ["fat", "lazy", "drowzy", "code", "grease"]

// Choose words randomly
var rand = [Math.floor(Math.random() * phrases.length)];
var rightWord = [];
var wrongWord = [];
var choosenPhrase = phrases[rand]
var underScores = [];

// dom manipulation
var docUnderScores = document.getElementsByClassName("underscores");
var docRightGuess = document.getElementsByClassName("rightGuess");
var docWrongGuess = document.getElementsByClassName("wrongGuess")



console.log(choosenPhrase);
// Create underscores based on length of word
var generateUnderscores = () => {
    for (var i = 0; i < choosenPhrase.length; i++) {
        underScores.push('_');
    }
    return underScores;
}


// Get users guess
 document.addEventListener('keypress', (event) => {
    var keyword = String.fromCharCode(event.keyCode);
// If user guess it is right 
     if(choosenPhrase.indexOf(keyword) > -1) {
        // add to the right words array
    rightWord.push(keyword);
    // replace underscore with right letter
    underScores[choosenPhrase.indexOf(keyword)] = keyword;
    docUnderScores[0].innerHTML = underScores.join(' ');
    docRightGuess[0].innerHTML = rightWord;
    //Check to see if user word matches guesses
    if(underScores.join(' ') == choosenPhrase) {
        alert('You Win');
    }
     }
    else {
        wrongWord.push(keyword);
    docWrongGuess[0].innerHTML = wrongWord;
    }

    docUnderScores[0].innerHTML = generateUnderscores().join(' ')
})
