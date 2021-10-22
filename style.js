var prevScrollpos = 0;
var fixedPos = 170; 
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;

    if(prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    }
    else { document.getElementById("navbar").style.top = "-90px"; }

        prevScrollpos = currentScrollPos;

}



//Gallery
$(document).ready(function(){
    $(".fancybox").fancybox({
          openEffect: "none",
          closeEffect: "none"
      });
      
      $(".zoom").hover(function(){
          
          $(this).addClass('transition');
      }, function(){
          
          $(this).removeClass('transition');
      });
  });
      

