/* This is a Script file. It goes in the folder "js", which should be in your Root Directory. */

$(document).ready(function(){

$(".section-title").click(function(){
   id = $(this).attr("id");
   box_id = "#content-"+id;
   if ($(box_id).hasClass("hidden")) {
      $(box_id).removeClass("hidden");
   } else {
      $(box_id).addClass("hidden");
   }
});

$(".section-title").keypress(function(event) { 
   if (event.keyCode === 13 || 36) {
      $(this).click();
   }
});

});