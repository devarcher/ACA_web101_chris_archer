
$('document').ready(function(){
  //Large Disc Drag and Drop
  $('.disc').draggable({
    revert:true
  });

  $('.towerBox').droppable({
    accept: '.disc',
    drop: function(event, ui) {
      $(this).prepend($(ui.draggable));
    }
  })

  $('.towerBox').droppable({
    accept: '.disc',
    drop: function(event, ui) {
      $(this).prepend($(ui.draggable));
    }
  })

  $('.towerBox').droppable({
    accept: '.disc',
    drop: function(event, ui) {
      $(this).prepend($(ui.draggable));
    }
  })
})