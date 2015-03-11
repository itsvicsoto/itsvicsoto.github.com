// var list = document.getElementById("list");

// nativesortable(list, {
//   change: onchange,
//   childClass: "sortable-child",
//   draggingClass: "sortable-dragging",
//   overClass: "sortable-over"
// });


$("[draggable]").on('dragstart', function(event) {
  event.originalEvent.dataTransfer.setData($(this).attr('data-type'), $(this).text());
}).on('dragend', function(event) {
  event.preventDefault();
});

$('#ifr').contents().find('.dropzone').on('dragover', function(event) {
  //add preventDefault to stop default behaviour
  event.preventDefault();
  $(this).css('opacity', '.5');
}).on('dragleave', function(event) {
  //add preventDefault to stop default behaviour
  event.preventDefault();
  $(this).css('opacity', 1);
})


//Enable Drop event for all the children elements also! - If your drop zone contains childrens
$('#ifr').contents().find('.dropzone').find('*').andSelf().on('drop', function(event) {
  //restore the dropzone after dropevent
  $('.dropzone').css('opacity', 1);
  event.stopPropagation();
  event.preventDefault();
  //Check the Data Type accepted by the drop zone which got the drop event.
  if ($(this).closest('.dropzone').attr('data-accept-type') == "Text") {
    var textData = event.originalEvent.dataTransfer.getData('Text');
    if (typeof textData == "undefined" || textData == "") {
      return;
    }
  }
  if ($(this).closest('.dropzone').attr('data-accept-type') == "HTML") {
    var htmlData = event.originalEvent.dataTransfer.getData('HTML');
    if (typeof htmlData == "undefined" || htmlData == "") {
      return;
    }
  }


  //Find the Span which contains the count
  var prevCount = $(this).closest('.dropzone').find('span[id]').text();
  prevCount = parseInt(prevCount, 10);
  var newCount = prevCount + 1;

  //Change the Count inside the Span
  $(this).closest('.dropzone').find('span[id]').html(newCount);
});
