$(document).ready(function(){
  for (i = 0; i < 16; i++)
  {
      var row = $('<div class="row"></div>')

      for (j = 0; j < 16; j++) {
          $('<div class="unit"></div>').appendTo(row);
      }

      $("#container").append(row);
  }

  //Drawing effect
  $(".unit").mouseenter(function(){
    $(this).addClass("gray")
  });
//reset
  $("#reset").click(function(){
    $(".unit").removeClass("gray")
  });
//hover on button
  $("button").hover(function(){
    $(this).fadeTo('fast',0.5)
  },

  function(){
    $(this).fadeTo('fast',1)
  });

  
});
