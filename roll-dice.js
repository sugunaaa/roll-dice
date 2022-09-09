var btn = document.getElementById('btn');
var cube1=document.getElementById('cube1');
var cube2=document.getElementById('cube2');

var min = 1;
var max = 24;

btn.onclick=function() {
        console.log(1);
        var xRand1 = getRandom(max, min);
        var yRand1 = getRandom(max, min);
        var xRand2 = getRandom(max, min);
        var yRand2 = getRandom(max, min);
        cube1.style.transform = `rotateX(${xRand1}deg) rotateY(${yRand1}deg)`;
        cube2.style.transform = `rotateX(${xRand2}deg) rotateY(${yRand2}deg)`;
    }

function getRandom(max, min) {
  var rotate_deg=(Math.floor(Math.random() * (max-min)) + min) * 90;
  console.log(rotate_deg);
  return rotate_deg;
}
