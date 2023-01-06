let open = document.querySelector('.open')
let close = document.querySelector('.close')
let dialog = document.querySelector('.dialog')

open.addEventListener('click', ()=>{
    dialog.showModal()
    dialog.classList.toggle('display')
})

close.addEventListener('click', ()=>{
    dialog.close()
    dialog.classList.toggle('display')
})

