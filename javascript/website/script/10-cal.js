let calculation = localStorage.getItem('calc') || '';

function updateCalculation(){
       const cal = document.querySelector('.js-cal-box')
       .innerHTML = `${calculation}`;
       
      }

function save() {
  localStorage.setItem('calc', calculation);
}

function num(n) {
  calculation += n;
  save();
  console.log(calculation);
}

function op(o) {
  calculation += o;
  save();
  console.log(calculation);
}

function equals() {
  calculation = String(eval(calculation));
  save();
  console.log(calculation);
}

function clearAll() {
  calculation = '';
  save();
  console.log('cleared');
}