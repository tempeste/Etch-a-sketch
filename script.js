$(document).ready(function(){


    for (i = 0; i < 16; i++){
      var row = $('<div class="row"></div>')

      for (j = 0; j < 16; j++) {
          $('<div class="unit"></div>').appendTo(row);
      }

      $("#container").append(row);
  }

  $("#changepx").click(function(){
    var gridSize = prompt("What dimensions should the new grid be? (enter 1-50 only)",16)
    if (gridSize > 50) {
      alert("Too big")
    }
    else{
    $(".row").remove()

    //remaking the grid
      for (i = 0; i < gridSize; i++){
          var row = $('<div class="row"></div>')

          for (j = 0; j < gridSize; j++) {
              $('<div class="unit"></div>').appendTo(row);
          }

          $("#container").append(row);
      }
    }

  $("#container").css("height",""+ (gridSize*20+500) +"px")

    //Drawing effect
    $(".unit").mouseenter(function(){
      $(this).addClass("color")
    });
    //reset

    $("#reset").click(function(){
      $(".unit").removeClass("color")
      $(".unit").css("background-color","white")
    });


  });


  //Drawing effect
  $(".unit").mouseenter(function(){
    $(this).addClass("color")
  });
//reset
  $("#reset").click(function(){
    $(".unit").removeClass("color")
  });
//hover on button
  $("button").hover(function(){
    $(this).fadeTo('fast',0.5)
  },

  function(){
    $(this).fadeTo('fast',1)
  });

//color randomizer
  function color(){
    var letters = '0123456789ABCDEF'
    var color = '#'
    for (var u =0; u<6; u++){
      color += letters[Math.floor(Math.random()*16)]
    }
    return color
  }

  $("#rainbow").click(function(){
  $(".unit").off('mouseenter')
  $(".unit").mouseenter(function(){
    $(this).css("background-color", ""+color()+"")
  });
});

  $("#default").click(function(){
    $(".unit").off('mouseenter')
    $(".unit").mouseenter(function(){
      $(this).css("background-color","gray")
    })
  })

  $("#user").click(function(){
    $(".unit").off('mouseenter')
    var value = prompt("Choose your color value(hexadecimal only)","#FF0000")
    $(".unit").mouseenter(function(){
      $(this).css("background-color",""+value+"")
    })
  })
});
