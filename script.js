const display = document.querySelector('.hasil');
const operator = document.querySelector('.operator');
const userInput = document.querySelector('.user-input');
const clear = document.querySelector('.c');
const samaDengan = document.querySelector('.sama-dengan');

let value1 = '';
let value2 = '';
let condition = '';
let hasil = 0;

// ngambil input user
userInput.addEventListener('click', function(e){
  if(condition === ''){
    if(e.target.textContent != 'C' && e.target.textContent != '='){
      value1 += e.target.textContent;
      display.textContent = value1;
      console.log('value1', value1, typeof value1)
    }
  }else if(condition != ''){
    if(e.target.textContent != 'C' && e.target.textContent != '='){
      value2 += e.target.textContent;
      display.textContent = value2;
      console.log('value2', value2, typeof value2)
    }
  }
});


// ngambil operasi
operator.addEventListener('click', function(e){
  switch (e.target.className) {
    case 'tambah':
      condition = '+';
      break;

    case 'kurang':
      condition = '-';
      break;

    case 'kali':
      condition = '*';
      break;

    case 'bagi':
      condition = '/';
      break;
  
    default:
      break;
  }
});


// Kalkulasi
samaDengan.addEventListener('click', () => {
  switch (condition) {
    case '+':
      tambah();
      break;

    case '-':
      kurang();
      break;

    case '*':
      kali();
      break;

    case '/':
      bagi();
      break;
  
    default:
      break;
  }


  value1 = '';
  value2 = '';
  condition = '';
});


// tombol clear
clear.addEventListener('click', () => {
  value1 = '';
  value2 = '';
  condition = '';
  display.textContent = 0;
  hasil = 0;
});


// Fungsi Operasi
// Tambah
function tambah(){
  if(value1 != ''){
    hasil += parseFloat(value1) + parseFloat(value2);
  }else hasil += parseFloat(value2);
  display.textContent = hasil;
  return hasil;
};

// Kurang
function kurang(){
  if(hasil === 0){
    hasil = parseFloat(value1) || 0;
    hasil -= parseFloat(value2);
  }else if(hasil != 0 && hasil >= 0){
    hasil -= parseFloat(value2);
  }else if(hasil < 0){
    hasil += parseFloat(value2);
  }
  display.textContent = hasil;
  return hasil;
}

// kali
function kali(){
  if(hasil === 0){
    hasil = parseFloat(value1) || 0;
    hasil *= parseFloat(value2);
  }else hasil *= parseFloat(value2);
  display.textContent = hasil;
  return hasil;
}

// bagi
function bagi(){
  if(hasil === 0){
    hasil = parseFloat(value1) || 0;
    hasil /= parseFloat(value2);
  }else hasil /= parseFloat(value2);
  display.textContent = hasil;
  return hasil;
}