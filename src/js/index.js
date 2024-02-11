import 'bootstrap'
import 'jquery/dist/jquery';
import '../sass/style.scss';
import '@fortawesome/fontawesome-free/js/all'



$(function() {
     $('.thumbanl').hover(
          function() {
          $(this).find('.project-category').hide();
          $(this).find('.caption2').slideDown(250);
      },
      function(){
          $(this).find('.caption2').slideUp(250);
          $(this).find('.proj52555ect-category').show();    
      }
      );
});

var date = new Date();
var year = date.getFullYear();
document.getElementById("date").innerHTML = year;
