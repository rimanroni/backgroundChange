const buttonOne = document.getElementById('buttonOne');
buttonOne.addEventListener('click', function(){

     document.body.style.backgroundColor = 'black';
     document.body.style.color = 'white';
     document.getElementById('buttonOne').style.background = 'white'

})

const buttonTwo = document.getElementById('buttonTwo');
buttonTwo.addEventListener('click', function(){

  document.body.style.background = 'teal';
  document.body.style.color = 'white';
  document.getElementById('buttonTwo').style.background = 'white'
  document.getElementById('buttonOne').style.background = 'black'

})

const buttonThree = document.getElementById('buttonThree');
buttonThree.addEventListener('click', function(){

   document.body.style.background = 'purple';
   document.getElementById('buttonThree').style.background = 'white';
   document.getElementById('buttonTwo').style.background = 'teal';

 })
 const buttonFour = document.getElementById('buttonFour');
 buttonFour.addEventListener('click', function(){
   document.body.style.background = 'orange';
   document.body.style.color = 'white';
   document.getElementById('buttonFour').style.background = 'white';
   document.getElementById('buttonThree').style.background = 'purple'

  })

const buttonFive = document.getElementById('buttonFive');
buttonFive.addEventListener('click', function(){

      document.body.style.background = 'deeppink';
      document.body.style.color = 'white' ;
      document.getElementById('buttonFive').style.background = 'white'
      document.getElementById('buttonFour').style.background = 'orange'

})

const buttonSix = document.getElementById('buttonSix');
buttonSix.addEventListener('click' , function (){
  document.body.style.background = 'deepskyblue';
  document.body.style.color = 'white';
  document.getElementById('buttonSix').style.background = 'white';
  document.getElementById('buttonFive').style.background = 'deeppink';

})

const buttonSeven = document.getElementById ('buttonSeven');
buttonSeven.addEventListener('click', function(){
   document.body.style.background = 'magenta';
   document.body.style.color = 'white';
   document.getElementById('buttonSeven').style.background = 'white';
   document.getElementById('buttonSix').style.background = 'deepskyblue'

})
const buttonEight = document.getElementById('buttonEight');
buttonEight.addEventListener('click', function(){
  document.body.style.background = 'gainsboro';
  document.body.style.color = 'black'
  document.getElementById('buttonSeven').style.background = 'magenta';
  document.getElementById('buttonEight').style.background = 'white'
  document.getElementById('buttonEight').style.border = 'none'

})
// back btn 
 