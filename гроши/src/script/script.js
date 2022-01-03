
function  input( ) {
    let input = document.querySelector('.page-about__sum-range')
    let p = document.querySelector('.page-about__min-sum')
    p.innerHTML = input.value
    
}


function inputDay() {
    let input = document.getElementById('input-range-day')
    let p = document.querySelector('.page-about__min-num')
    p.innerHTML = input.value
}

function inputMobile() {
  let input = document.getElementById('input-range-hidden') 
  let p = document.querySelector('.page-about__min-num')
  p.innerHTML = input.value
}
// кредитная история
let isVisible = false;
const div = document.getElementById('history__wrap');

function trigger() {
  isVisible = !isVisible;
  div.style.display = isVisible ? "block" : "none";
};

document
  .getElementById('block-list')
  .addEventListener('click', trigger);
 
document
  .getElementById('history__list-show')
  .addEventListener('click', trigger);

document.querySelector('#humburger__toggle').addEventListener('change', function(e) {
  document.body.style.overflow = e.target.checked === true ? 'hidden' : '';
});