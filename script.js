$(document).ready(function(){
  for (i = 0; i < 16; i++)
  {
      var row = $('<div class="row"></div>')

      for (j = 0; j < 16; j++) {
          $('<div class="unit"></div>').appendTo(row);
      }

      $("#container").append(row);
  }
});
