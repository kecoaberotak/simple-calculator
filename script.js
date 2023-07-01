const display = document.querySelector('.hasil');
const operator = document.querySelector('.operator');
const userInput = document.querySelector('.user-input');
let keys = '';

// ngambil operator
operator.addEventListener('click', function(e){
  console.log(e.target.className);
})


// ngambil inputan user
userInput.addEventListener('click', e => {
  if(e.target.innerText === 'C'){
    display.innerText = '0'
    keys = '';
  }else {
    keys += e.target.innerText;
    display.innerText = keys;
  };
});