var moving = false
var from = 0
var measure = 68 //75
var targetX = measure * 4
var x = targetX
var $frame = $ ('.cal-frame')


var grav = function (what) {
  return Math.sin ((what / measure) * Math.PI) * 10
}

var sel = function (who, num) {
  $ ('.monthsel').not (who).removeClass ('selected')
  $ (who).addClass ('selected')
  targetX = (measure * 4) + num * measure
  $frame.animate ({
    'left': targetX + 'px',
    'top': '0px'
  }, 500)
  return false
}



$frame.on('touchstart mousedown',function (e) { //!!!!!
  $frame.stop ()
  moving = true
  x = targetX
  from = x - (e.clientX || e.touches[0].clientX)
  e.preventDefault ()
  console.log("touchstart mousedown")
})

$frame.on('touchend mouseup',function (e) { //!!!!!!
  moving = false
  targetX = x - (x - (measure / 2)) % measure + (measure / 2);
  $frame.animate ({
    'left': targetX + 'px',
    'top': '0px'
  }, 100)
  console.log("touchend mouseup")
  
})

$frame.on('touchmove mousemove', function (e) {//!!!!!!!
  if (moving) {

    x = from + (e.clientX || e.touches[0].clientX)
    if (x < measure) x = measure
    if (x > measure * 7) x = measure * 7
    y = 0; //- Math.abs (grav (x))
    $frame.css ('left', x + 'px')
    $frame.css ('top', y + 'px')
    $ ('.monthsel').removeClass ('selected')
  console.log("touchmove mousemove")
  console.log("moving", moving)

  }
  e.preventDefault ()
  return false
})

$('.cal-body').mousedown (function (e) {
  e.preventDefault ()
})



// .on('touchstart mousedown', function(e) {
//   e.preventDefault();
//   someAction();
// });


// .on('touchend mouseup', function(e) {
//   e.preventDefault();
//   someAction();
// });


// .on('touchmove mousemove', function(e) {
//   e.preventDefault();
//   someAction();
// });