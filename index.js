let navList = document.getElementById('nav-list');
let navList2 = document.getElementById("nav-list2");
let burger = document.getElementById('burger');




burger.addEventListener('click',() => {
    burger.classList.toggle('active');
    navList.classList.toggle("active");
    navList2.classList.toggle('open');
    

if(navList2.classList.contains('open')){
    navList2.classList.remove('nav-list2')
}else{
    navList2.classList.add('nav-list2')
}

})

