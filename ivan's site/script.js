const burger = document.querySelector('.burger')
const exit = document.querySelector('.exit')
burger.addEventListener('click', () => {
const dropDown = document.querySelector('.dropdown')
 dropDown.style.top = '0'
})
exit.addEventListener('click', () => {
    const dropDown = document.querySelector('.dropdown')
     dropDown.style.top = '-100%'
    })
