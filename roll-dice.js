var btn = document.getElementById('btn');
var cube1=document.getElementById('cube1');
var cube2=document.getElementById('cube2');

var min = 1;
var max = 10;

btn.onclick=function() {
        var xRand1 = getRandom(max, min);
        var yRand1 = getRandom(max, min);
        var xRand2 = getRandom(max, min);
        var yRand2 = getRandom(max, min);
        console.log("xRand1 = ",xRand1);
        console.log("yRand1 = ",yRand1);
        console.log("xRand2 = ",xRand2);
        console.log("yRand2 = ",yRand2);
        cube1.style.transform = `rotateX(${xRand1}deg) rotateY(${yRand1}deg)`;
        cube2.style.transform = `rotateX(${xRand2}deg) rotateY(${yRand2}deg)`;
        disp_sum(xRand1,yRand1,xRand2,yRand2);
    }

function getRandom(max, min) {
  var rotate_deg=(Math.floor(Math.random() * (max-min)) + min) * 90;
 // console.log(rotate_deg);

  return rotate_deg;
}
function disp_sum(xRand1,yRand1,xRand2,yRand2)
{
    var value1 = 1;
    var value2 = 1;
    var rotx1=(xRand1/90);
    if(rotx1>=4)
    {
        rotx1-=4;
    }
}