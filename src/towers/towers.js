
$('document').ready(function(){
  //Large Disc Drag and Drop
  $('.disc').draggable({
    revert:true
  });

  $('.towerBoxLeft').droppable({
    accept: '.disc',
    drop: function(event, ui) {
      $(this).prepend($(ui.draggable));
    }
  })

  $('.towerBoxMiddle').droppable({
    accept: '.disc',
    drop: function(event, ui) {
      $(this).prepend($(ui.draggable));
    }
  })

  $('.towerBoxRight').droppable({
    accept: '.disc',
    drop: function(event, ui) {
      $(this).prepend($(ui.draggable));
    }
  })
})