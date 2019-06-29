
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

window.onload = function() {
  
  var audio = document.getElementById("audio");
  
audio.onload = function() {
      alert("AAAAAAAAAaaaaaaa");
    var files = this.files;
    audio.src = URL.createObjectURL(files[0]);
    audio.load();
    audio.play();
    var context = new AudioContext();
    var src = context.createMediaElementSource(audio);
    var analyser = context.createAnalyser();

    var canvas = document.getElementById("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    var ctx = canvas.getContext("2d");

    src.connect(analyser);
    analyser.connect(context.destination);

    analyser.fftSize = 256;

    var bufferLength = analyser.frequencyBinCount;
    console.log(bufferLength);

    var dataArray = new Uint8Array(bufferLength);

    var WIDTH = canvas.width;
    var HEIGHT = canvas.height;

    var barWidth = (WIDTH / bufferLength) * 2.5;
    var barHeight;
    var x = 0;

    function renderFrame() {
      requestAnimationFrame(renderFrame);

      x = 0;

      analyser.getByteFrequencyData(dataArray);

      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, WIDTH, HEIGHT);

      for (var i = 0; i < bufferLength; i++) {
        barHeight = dataArray[i];
        
        var r = barHeight + (25 * (i/bufferLength));
        var g = 250 * (i/bufferLength);
        var b = 50;

        ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
        ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);

        x += barWidth + 1;
      }
    }

    audio.play();
    renderFrame();
  };
};

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
