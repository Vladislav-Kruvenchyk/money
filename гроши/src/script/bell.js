// уведомления 
// не прочтение
let defaul = false 
const  blInner = document.getElementById('hd-unread');
let  viewHidden = () => {
      defaul = !defaul
      blInner.style.display = defaul ? "flex" : "none";
    }
    document
    .getElementById('unread') 
    .addEventListener('click', viewHidden)
    document
    .getElementById('ln-hidden')
    .addEventListener('click', viewHidden)


const zlUnder = document.getElementById('zl-unread')
let viewHiddez = () => {
    defaul = !defaul
    zlUnder.style.display = defaul ? "flex" : "none"
}

document
.getElementById('lz-unread')
.addEventListener('click', viewHiddez)

document
.getElementById('a-hidden')
.addEventListener('click', viewHiddez)

///прочтение
const bRead = document.getElementById('b-read')
let viewHiddeb = () => {
    defaul = !defaul
    bRead.style.display = defaul ? "flex" : "none"
}

document
.getElementById('a-read')
.addEventListener('click', viewHiddeb)

document
.getElementById('b-hidden')
.addEventListener('click', viewHiddeb)

const cRead = document.getElementById('c-read')
let viewHiddec = () => {
    defaul = !defaul
    cRead.style.display = defaul ? "flex" : "none"
}

document
.getElementById('d-read')
.addEventListener('click', viewHiddec)

document
.getElementById('c-hidden')
.addEventListener('click', viewHiddec)

document.querySelector('#humburger__toggle').addEventListener('change', function(e) {
    document.body.style.overflow = e.target.checked === true ? 'hidden' : '';
  });