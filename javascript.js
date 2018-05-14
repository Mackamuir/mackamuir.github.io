 function play()
        {
        var a = Math.random()*5;
        a=Math.floor(a);

	        if(a==4)
        {
        document.getElementById('soundtrack').innerHTML="<audio id='background_audio1' loop autoplay><source src='mackamuir.github.io/music/kys.mp3' type='audio/ogg'>Your browser does not support the audio element.</audio>";
        }
	        if(a==3)
        {
        document.getElementById('soundtrack').innerHTML="<audio id='background_audio1' loop autoplay><source src='mackamuir.github.io/music/iw.mp3' type='audio/ogg'>Your browser does not support the audio element.</audio>";
        }
        if(a==2)
        {
        document.getElementById('soundtrack').innerHTML="<audio id='background_audio1' loop autoplay><source src='mackamuir.github.io/music/dcir.mp3' type='audio/ogg'>Your browser does not support the audio element.</audio>";
        }
        if(a==1)
        {
        document.getElementById('soundtrack').innerHTML="<audio id='background_audio1' loop autoplay><source src='mackamuir.github.io/music/404.mp3' type='audio/ogg'>Your browser does not support the audio element.</audio>";
        }
        if(a==0)
        {
       document.getElementById('soundtrack').innerHTML="<audio id='background_audio1' loop autoplay><source src='mackamuir.github.io/music/sb.mp3' type='audio/ogg'>Your browser does not support the audio element.</audio>";
        }
	}
  
  $( document ).on( "pageinit", function() {
    $( "#popupVideo iframe" )
        .attr( "width", 0 )
        .attr( "height", 0 );
		  
    $( "#popupVideo" ).on({
        popupbeforeposition: function() {
            var size = scale( 497, 298, 15, 1 ),
                w = size.width,
                h = size.height;

            $( "#popupVideo iframe" )
                .attr( "width", w )
                .attr( "height", h );
        },
        popupafterclose: function() {
            $( "#popupVideo iframe" )
                .attr( "width", 0 )
                .attr( "height", 0 );    
        }
    });
});	

		   window.onload = function() {
    document.getElementById("background_audio1").play();
  }
  function toggleMusic() {
     var music = document.getElementById("music");
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
	
          particlesJS.load('particles-js', 'particles.json',
        function(){
            console.log('particles.json loaded...')
        })

var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

        //enabling smooth scroll
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
