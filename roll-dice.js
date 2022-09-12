var btn = document.getElementById('btn');
var cube1=document.querySelector('.cube1');
var cube2=document.querySelector('.cube2');
var sum_disp=document.querySelector('.sum')
var currentClass1 = '';
var currentClass2 = '';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); 
}

function rollDice() {
  var randNum1 =getRandomInt(1,7); 
  console.log(randNum1 )
  var randNum2 =getRandomInt(1,7); 
  console.log(randNum2 )

  var showClass1 = 'show-' + randNum1;
  console.log(showClass1)
  var showClass2 = 'show-' + randNum2;
  console.log(showClass2)
  if ( currentClass1 ) {
    cube1.classList.remove( currentClass1 );
    cube2.classList.remove( currentClass2);
  }
  cube1.classList.add( showClass1);
  currentClass1 = showClass1;
  cube2.classList.add( showClass2);
  currentClass2 = showClass2;
  sum_disp.innerHTML='The sum is '+(randNum1+randNum2);
}
btn.addEventListener("click", rollDice);