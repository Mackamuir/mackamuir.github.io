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
I Stole all of this
*/
//Particles JS Load
        particlesJS.load('particles-js', 'particles.json',
        function(){
            console.log('particles.json loaded...')
        })
//Music
/*
        function play()
        {
        var a = Math.random()*6;
        a=Math.floor(a);
	        if(a==5)
        {
        document.getElementById('soundtrack').innerHTML="<audio id='background_audio1' loop autoplay><source src='https://raw.githubusercontent.com/Mackamuir/mackamuir.github.io/master/music/pe.mp3' type='audio/ogg'>Your browser does not support the audio element.</audio>";
        }
	        if(a==4)
        {
        document.getElementById('soundtrack').innerHTML="<audio id='background_audio1' loop autoplay><source src='https://raw.githubusercontent.com/Mackamuir/mackamuir.github.io/master/music/kys.mp3' type='audio/ogg'>Your browser does not support the audio element.</audio>";
        }
	        if(a==3)
        {
        document.getElementById('soundtrack').innerHTML="<audio id='background_audio1' loop autoplay><source src='https://raw.githubusercontent.com/Mackamuir/mackamuir.github.io/master/music/iw.mp3' type='audio/ogg'>Your browser does not support the audio element.</audio>";
        }
        if(a==2)
        {
        document.getElementById('soundtrack').innerHTML="<audio id='background_audio1' loop autoplay><source src='https://raw.githubusercontent.com/Mackamuir/mackamuir.github.io/master/music/dcir.mp3' type='audio/ogg'>Your browser does not support the audio element.</audio>";
        }
        if(a==1)
        {
        document.getElementById('soundtrack').innerHTML="<audio id='background_audio1' loop autoplay><source src='https://raw.githubusercontent.com/Mackamuir/mackamuir.github.io/master/music/404.mp3' type='audio/ogg'>Your browser does not support the audio element.</audio>";
        }
        if(a==0)
        {
       document.getElementById('soundtrack').innerHTML="<audio id='background_audio1' loop autoplay><source src='https://raw.githubusercontent.com/Mackamuir/mackamuir.github.io/master/music/sb.mp3' type='audio/ogg'>Your browser does not support the audio element.</audio>";
        }
	}
	*/
//Cycle Text
var divs = $('div[id^="content-"]').hide(),
    i = 0;

(function cycle() { 

    divs.eq(i).fadeIn(400)
              .delay(1000)
              .fadeOut(400, cycle);

    i = ++i % divs.length;

})();
//AutoScroll
        $(function() {
          $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
              if (target.length) {
                $('html, body').animate({
                  scrollTop: target.offset().top
                }, 1000);
                return false;
              }
            }
          });
        });
//Return to top
$(window).scroll(function() {
    if ($(this).scrollTop() >= 250) { 
        $('#myBtn').fadeIn(200);
    } else {
        $('#myBtn').fadeOut(200); 
    }
});
//Pause Button
window.onload = function() {
    document.getElementById("background_audio1").play();
  }
  function toggleMusic() {
     var music = document.getElementById("soundtrack");
     var status = $(".toggle").val();
    if(status == "play") {
      music.pause();
      $(".toggle").val("pause");
      $(".toggle").html("<i class=\"fa fa-play-circle\" aria-hidden=\"true\"></i>");
    } else {
      music.play();
     $(".toggle").val("play");
     $(".toggle").html("<i class=\"fa fa-pause-circle\" aria-hidden=\"true\"></i>");
    }
  } 

function onYouTubeIframeAPIReady() {
  var player;
  player = new YT.Player('YouTubeBackgroundVideoPlayer', {
      videoId: '{$loadYouTubeVideoID}', // YouTube Video ID
      width: 1280,               // Player width (in px)
      height: 720,              // Player height (in px)
      playerVars: {
        playlist: '{$loadYouTubeVideoID}',
          autoplay: 1,        // Auto-play the video on load
          autohide: 1,
          disablekb: 1, 
          controls: 0,        // Hide pause/play buttons in player
          showinfo: 0,        // Hide the video title
          modestbranding: 1,  // Hide the Youtube Logo
          loop: 1,            // Run the video in a loop
          fs: 0,              // Hide the full screen button
          autohide: 0,         // Hide video controls when playing
          rel: 0,
          enablejsapi: 1
      },
      events: {
        onReady: function(e) {
            e.target.mute();
            e.target.setPlaybackQuality('hd1080');
        },
        onStateChange: function(e) {
          if(e && e.data === 1){
              var videoHolder = document.getElementById('home-banner-box');
              if(videoHolder && videoHolder.id){
                videoHolder.classList.remove('loading');
              }
          }else if(e && e.data === 0){
            e.target.playVideo()
          }
        }
      }
  });
}
	
