// var btn = document.getElementById('cube1');
// // var cube1=document.getElementById('cube1');
// // var cube2=document.getElementById('cube2');

// var min = 1;
// var max = 24;

// cube1.onclick=function() {
//         console.log(1);
//         var xRand = getRandom(max, min);
//         var yRand = getRandom(max, min);
//         cube1.style.webkitTransform = `rotateX(${xRand}deg) rotateY(${yRand}deg)`;
//         cube1.style.transform = `rotateX(${xRand}deg) rotateY(${yRand}deg)`;
//         // cube2.style.transform = `rotateX(${xRand}deg) rotateY(${yRand}deg)`;
//     }

// function getRandom(max, min) {
//   var rotate_deg=(Math.floor(Math.random() * (max-min)) + min) * 90;
//   console.log(rotate_deg);
//   return rotate_deg;
// }
var cube = document.getElementById('cube');

var min = 1;
var max = 24;

cube.onclick = function() {
  var xRand = getRandom(max, min);
  var yRand = getRandom(max, min);
    
  cube.style.webkitTransform = 'rotateX('+xRand+'deg) rotateY('+yRand+'deg)';
  cube.style.transform = 'rotateX('+xRand+'deg) rotateY('+yRand+'deg)';
}

function getRandom(max, min) {
  return (Math.floor(Math.random() * (max-min)) + min) * 90;
}
