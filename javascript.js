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
I 
*/
//Particles JS Load
        particlesJS.load('particles-js', 'particles.json',
        function(){
            console.log('particles.json loaded...')
        })
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
    document.getElementById("music").play();
  }
  function toggleMusic() {
     var music = document.getElementById("music");
     var status = $(".toggle").val();
    if(status == "play") {
      music.pause();
      $(".toggle").val("pause");
      $(".toggle").html("<i class=\"fa fa-play\" aria-hidden=\"true\"></i>");
    } else {
      music.play();
     $(".toggle").val("play");
     $(".toggle").html("<i class=\"fa fa-pause\" aria-hidden=\"true\"></i>");
    }
  }
  function setHalfVolume() {
    var music = document.getElementById("music");
    music.volume = 0.05;
  }
  //Cycle Text
  			var divs = $('div[id^="content-"]').hide(),
    i = 0;
(function cycle() { 
    divs.eq(i).fadeIn(1000)
              .delay(5000)
              .fadeOut(1000, cycle);
    i = ++i % divs.length;
})();

	