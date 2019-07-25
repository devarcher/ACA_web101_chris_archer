
$('document').ready(function(){
  //Large Disc Drag and Drop
  $('.disc').draggable({
    revert:true
  });

  $('.left-box').droppable({
    accept: '.disc',
    drop: function(event, ui) {
      $(this).append($(ui.draggable));
    }
  })

  $('.middle-box').droppable({
    accept: '.disc',
    drop: function(event, ui) {
      $(this).append($(ui.draggable));
    }
  })

  $('.right-box').droppable({
    accept: '.disc',
    drop: function(event, ui) {
      $(this).append($(ui.draggable));
    }
  })
})