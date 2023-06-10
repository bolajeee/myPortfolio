let navList = document.getElementById('nav-list');
let burger = document.getElementById('burger');

burger.addEventListener('click',() => {
    console.log('working')
    burger.classList.toggle('ri-close-line')
    burger.classList.remove('bx bx-menu')

    if(burger.classList.contains('bx-menu')){
        navList.classList.add('open')
    }else{
        navList.classList.remove('open')
    }
})