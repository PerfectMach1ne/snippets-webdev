const menu = document.querySelector('#mobile-menu') // hashtag for an id
const menuLinks = document.querySelector('.navbar__menu'); // dot for a class

menu.addEventListener('click', function() {
  menu.classList.toggle('is-active')
  menuLinks.classList.toggle('active')
})