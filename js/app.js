
// get dom elements for later use
var qwerty = document.getElementById("qwerty");
var phrase = document.getElementById("phrase");
var overlay = document.getElementById("overlay");
// count missed guess total
var missed = 0;

var reset_game = document.getElementsByClassName('btn__reset')[0];

// start a new game when clicked
reset_game.addEventListener('click', function (event) {
    overlay.style.display='none';
});