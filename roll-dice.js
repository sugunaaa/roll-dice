var btn = document.getElementById('btn');
var cube1=document.getElementById('çube1');
var cube2=document.getElementById('çube2');

var min = 1;
var max = 24;

btn.onclick = function() {
  var xRand = getRandom(max, min);
  var yRand = getRandom(max, min);
  cube1.style.transform = 'rotateX('+xRand+'deg) rotateY('+yRand+'deg)';
  cube2.style.transform = 'rotateX('+xRand+'deg) rotateY('+yRand+'deg)';
}

function getRandom(max, min) {
  return (Math.floor(Math.random() * (max-min)) + min) * 90;
}
