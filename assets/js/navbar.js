let toggleButton = document.getElementsByClassName('toggle-button')[0]
let menu = document.getElementsByClassName('menu')[0]

toggleButton.addEventListener('click', function(){
    menu.classList.toggle('show-nav')
   
})