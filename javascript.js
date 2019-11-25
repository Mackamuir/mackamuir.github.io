
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
  
  console.log(audio)

  //var files = this.files;
  //audio.src = URL.createObjectURL(audio);
  audio.load();
  audio.play();
  var context = new AudioContext();
  audio.crossOrigin = "anonymous";
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

var ctx = c.getContext("2d");
var img = document.getElementById("WEBBG");
var pat = ctx.createPattern(img, "no-repeat");
ctx.rect(0, 0, 150, 100);
ctx.fillStyle = pat;
ctx.fill();

    for (var i = 0; i < bufferLength; i++) {
      barHeight = dataArray[i];
        
      var r = 255;
      var g = 255;
      var b = 255;

      ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
      ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);

      x += barWidth + 1;
    }
  }

  audio.play();
  renderFrame();
};
