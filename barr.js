const saidebar=document.querySelector('.saidebar');
const ctrlbtn=document.querySelector('.ctrlbtn');

ctrlbtn.addEventListener('click' , function(){
    saidebar.classList.toggle('show');
    ctrlbtn.classList.toggle('open')
})



