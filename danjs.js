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
this function was created for l33t hacker men
*/
$.fn.typewriter = function() {
        this.each(function() {
            var $ele = $(this), str = $ele.html(), progress = 0, offset = 0;
            $ele.html('');
            var typewriting = function() {

              if(str.substring(progress, progress + 1) == "<"){
                var re = new RegExp(/<span class="instant"/);
                var cl = new RegExp(/<span class=""/);
                if (str.substring(progress,str.length).match(re)) {
                  progress += str.substring(progress,str.length).indexOf('</span>')+7;
                }else if(str.substring(progress,str.length).match(cl)){
                  offset = progress;
                  progress += str.substring(progress,str.length).indexOf('</span>')+7;


                }else{
                while(str.substring(progress, progress + 1) != ">"){
                  progress++;
                }
                }
              }

                $ele.html(str.substring(offset, progress++) + (progress & 1 ? '_' : ''));
              if (progress >= str.length){
                return;
              }
              else{
                setTimeout(typewriting, 10 + Math.random()*100);
              }
            }
            typewriting();
        });
        return this;
    };
$('#terminal').typewriter();
