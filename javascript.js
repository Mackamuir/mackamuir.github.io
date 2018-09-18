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


	
