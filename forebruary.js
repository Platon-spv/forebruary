var moving = false
var from = 0
var measure = 68 //75
var targetX = measure * 4
var x = targetX
var $me = $ ('.cal-frame')


var grav = function (what) {
  return Math.sin ((what / measure) * Math.PI) * 10
}

var sel = function (who, num) {
  $ ('.monthsel').not (who).removeClass ('selected')
  $ (who).addClass ('selected')
  targetX = (measure * 4) + num * measure
  $me.animate ({
    'left': targetX + 'px',
    'top': '0px'
  }, 500)
  return false
}

$me.mousedown (function (e) { //!!!!!
  $me.stop ()
  moving = true
  x = targetX
  from = x - e.clientX
  e.preventDefault ()
})

$me.mouseup (function (e) { //!!!!!!
  moving = false
  targetX = x - (x - (measure / 2)) % measure + (measure / 2);
  $me.animate ({
    'left': targetX + 'px',
    'top': '0px'
  }, 100)
})

$me.mousemove (function (e) {//!!!!!!!
  if (moving) {
    x = from + e.clientX
    if (x < measure) x = measure
    if (x > measure * 7) x = measure * 7
    y = 0; //- Math.abs (grav (x))
    $me.css ('left', x + 'px')
    $me.css ('top', y + 'px')
    $ ('.monthsel').removeClass ('selected')
  }
  e.preventDefault ()
  return false
})

$('.cal-body').mousedown (function (e) {
  e.preventDefault ()
})
