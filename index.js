let navList = document.getElementById('nav-list')
let navList2 = document.getElementById('nav-list2')
let burger = document.getElementById('burger')

burger.addEventListener('click', () => {
  burger.classList.toggle('active')
  navList.classList.toggle('active')
  navList2.classList.toggle('open')

  if (navList2.classList.contains('open')) {
    navList2.classList.remove('nav-list2')
  } else {
    navList2.classList.add('nav-list2')
  }
})

const sr = ScrollReveal({
  distance: '85px',
  duration: 2600,
  delay: 450,
  reset: true
})

const sr2 = ScrollReveal({
  distance: '35px',
  duration: 2600,
  delay: 450,
  reset: true
})

const sr3 = ScrollReveal({
  distance: '100px',
  duration: 2600,
  delay: 450,
  reset: true
})

sr.reveal('.nav-list', { delay: 200, origin: 'right' })
sr.reveal('.introduction', { delay: 300, origin: 'top' })
sr.reveal('.introduction h1', { delay: 400, origin: 'left' })
sr.reveal('.about img', { delay: 300, origin: 'left' })
sr.reveal('.about-text', { delay: 300, origin: 'right' })
sr3.reveal('.services', { delay: 400, origin: 'bottom' })
sr.reveal('.mail', { delay: 400, origin: 'left' })
sr.reveal('.mobile', { delay: 400, origin: 'right' })
sr.reveal('.D-needs', { delay: 300, origin: 'bottom' })
sr2.reveal('.social a:nth-child(1)', { delay: 200, origin: 'bottom' })
sr2.reveal('.social a:nth-child(2)', { delay: 400, origin: 'bottom' })
sr2.reveal('.social a:nth-child(3)', { delay: 600, origin: 'bottom' })
sr2.reveal('.social a:nth-child(4)', { delay: 700, origin: 'bottom' })
