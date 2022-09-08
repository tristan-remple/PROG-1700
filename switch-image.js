/* This is a Script file. It goes in the folder "js", which should be in your Root Directory. */

$(document).ready(function(){

$(".thumbnail").click(function(){
   id = $(this).attr("id");
   hid = "#H-"+id;
   new_src = $(hid).attr("src");
   new_desc = $(hid).html();

   $(".full-size").attr("src", new_src);
   $(".description").html(new_desc);
});

$(".thumbnail").keypress(function(event) { 
   if (event.keyCode === 13 || 36) {
      $(this).click();
   }
});

});