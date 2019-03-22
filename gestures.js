downX = 0;
downY = 0;

$( "#gestureArea" )
  .mouseup(function() {
   $("#gestureResult").text("Mouse Up");

   var upX = event.pageX;
   var upY = event.pageY;

   if (upX < downX) {
     $("#gestureResult").text("Swipe left");
   }
   else if (upX > downX) {
     $("#gestureResult").text("Swipe right");
   }
   else if (upX = downX) {
     $("#gestureResult").text("Mouse Up");
   }
  })
  .mousedown(function() {
   $("#gestureResult").text("Mouse Down");

   downX = event.pageX;
   downY = event.pageY;
  });
