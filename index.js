const h1 = document.getElementById('myH1');
const button = document.getElementById('count');

button.addEventListener('click', count);




let number = 0;

function count(){
  
 
 number = number + 1 ; 
  h1.innerHTML = number ;
}