document.querySelector('.hamburgerButton').addEventListener('click',()=>{
    document.querySelector('.rightNavbar').classList.add('active');
   
})

document.querySelector('.closeButton').addEventListener('click',()=>{
    document.querySelector('.rightNavbar').classList.remove('active');

})