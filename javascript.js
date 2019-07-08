
/*
          _____                    _____                    _____                    _____          
         /\    \                  /\    \                  /\    \                  /\    \         
        /::\____\                /::\    \                /::\    \                /::\____\        
       /::::|   |               /::::\    \              /::::\    \              /:::/    /        
      /:::::|   |              /::::::\    \            /::::::\    \            /:::/    /         
     /::::::|   |             /:::/\:::\    \          /:::/\:::\    \          /:::/    /          
    /:::/|::|   |            /:::/__\:::\    \        /:::/  \:::\    \        /:::/____/           
   /:::/ |::|   |           /::::\   \:::\    \      /:::/    \:::\    \      /::::\    \           
  /:::/  |::|___|______    /::::::\   \:::\    \    /:::/    / \:::\    \    /::::::\____\________  
 /:::/   |::::::::\    \  /:::/\:::\   \:::\    \  /:::/    /   \:::\    \  /:::/\:::::::::::\    \ 
/:::/    |:::::::::\____\/:::/  \:::\   \:::\____\/:::/____/     \:::\____\/:::/  |:::::::::::\____\
\::/    / ~~~~~/:::/    /\::/    \:::\  /:::/    /\:::\    \      \::/    /\::/   |::|~~~|~~~~~     
 \/____/      /:::/    /  \/____/ \:::\/:::/    /  \:::\    \      \/____/  \/____|::|   |          
             /:::/    /            \::::::/    /    \:::\    \                    |::|   |          
            /:::/    /              \::::/    /      \:::\    \                   |::|   |          
           /:::/    /               /:::/    /        \:::\    \                  |::|   |          
          /:::/    /               /:::/    /          \:::\    \                 |::|   |          
         /:::/    /               /:::/    /            \:::\    \                |::|   |          
        /:::/    /               /:::/    /              \:::\____\               \::|   |          
        \::/    /                \::/    /                \::/    /                \:|   |          
         \/____/                  \/____/                  \/____/                  \|___|   
I Stole all of this v2
*/


$(document).ready(function() {
var canvas = $('retardrain')[0];
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
if (canvas.getContext) {
var ctx = canvas.getContext('2d');
var w = canvas.width;
var h = canvas.height;
ctx.strokeStyle = 'rgba(174,194,224,0.5)';
ctx.lineWidth = 1;
ctx.lineCap = 'round';
var init = [];
var maxParts = 50;
for (var a = 0; a < maxParts; a++) {
init.push({
x: Math.random() * w,
y: Math.random() * h,
l: Math.random() * 1,
xs: -4 + Math.random() * 3 + 2,
ys: Math.random() * 10 + 7
})
}
var particles = [];
for (var b = 0; b < maxParts; b++) {
particles[b] = init[b];
}
function draw() {
ctx.clearRect(0, 0, w, h);
for (var c = 0; c < particles.length; c++) {
var p = particles[c];
ctx.beginPath();
ctx.moveTo(p.x, p.y);
ctx.lineTo(p.x + p.l * p.xs, p.y + p.l * p.ys);
ctx.stroke();
}
move();
}
function move() {
for (var b = 0; b < particles.length; b++) {
var p = particles[b];
p.x += p.xs;
p.y += p.ys;
if (p.x > w || p.y > h) {
p.x = Math.random() * w;
p.y = -20;
}
}
}
setInterval(draw, 30);
}
});

// music
var fft, // Allow us to analyze the song
    numBars = 1024, // The number of bars to use; power of 2 from 16 to 1024
    song; // The p5 sound object

// Load our song
var loader = document.querySelector(".loader");
document.getElementById("player").onload = function(event) {
    if(event.target.files[0]) {
        if(typeof song != "undefined") { // Catch already playing songs
            song.disconnect();
            song.stop();
        }
        
        // Load our new song
        song = loadSound(URL.createObjectURL(event.target.files[0]));
        loader.classList.add("loading");
    }
}

var canvas;
function setup() { // Setup p5.js
    canvas = createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(51);
    
    if(typeof song != "undefined" 
       && song.isLoaded() 
       && !song.isPlaying()) { // Do once
        loader.classList.remove("loading");
        
        song.play();
        song.setVolume(0.5);

        fft = new p5.FFT();
        fft.waveform(numBars);
        fft.smooth(0.85);
    }
    
    if(typeof fft != "undefined") {
        var spectrum = fft.analyze();
        noStroke();
        fill("rgb(0, 255, 0)");
        for(var i = 0; i < numBars; i++) {
            var x = map(i, 0, numBars, 0, width);
            var h = -height + map(spectrum[i], 0, 255, height, 0);
            rect(x, height, width / numBars, h);
        }
    }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
