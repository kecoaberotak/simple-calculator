const hasil = document.querySelector('.hasil');
const operator = document.querySelector('.operator');
const userInput = document.querySelector('.user-input');

// ngambil operator
operator.addEventListener('click', function(e){
  console.log(e.target.className);
})


// ngambil inputan user
userInput.addEventListener('click', e => {
  console.log(e.target.innerText)
})