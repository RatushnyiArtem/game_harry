let a = prompt('Ты кто?')
let site = document.getElementById('main')
if(a=='Я волшебник'){
    alert('Добро пожалость в Хоггвартс')
} else if(a=='I wizard'){
    alert('Welcome to the Hoggwarts') 
}
else{
    site.innerHTML = `<h1>Ты же не волшебник!</h1>`
}
let ney = document.getElementById('putter')
let dan = document.getElementById('vvod')
ney.addEventListener('keyup', check_name)
function check_name() {
    dan.innerHTML = ney.value
}
let start = document.getElementById('start')
let pers = document.getElementById('persona')
let boots = document.getElementById('boot')
let down = document.getElementById('down')
let left = document.getElementById('left')
start.addEventListener('click',poyav)
function poyav() {
    pers.style.opacity = '1'
}
let up = document.getElementById('up')
let space = 20
let position_h = 274
let position_v = 174
let position = 0
let right = document.getElementById('right')
up.addEventListener('click', swap_up)
function swap_up() {
    boots.style.transform = 'rotate(-90deg)'
    boots.style.marginTop = '20px'
    position_v+=space
    if(position_v>1020){
        alert('Wrong Way')
    } else{
        pers.style.bottom = position_v + 'px'
    }
}
right.addEventListener('click', swap_right)
function swap_right() {
    boots.style.transform = 'rotate(0deg)'
    boots.style.marginTop = '0px'
    position_h+=space
    if(position_h>1800){
        alert('Wrong Way')
    } else{
        pers.style.left = position_h + 'px'
    }
}
down.addEventListener('click',swap_down)
function swap_down() {
    boots.style.transform = 'rotate(0deg)'
    boots.style.transform = 'rotate(-270deg)'
    boots.style.marginTop = '20px'
    position_v -= 20
    if(position_v < 174){
        alert('Wrong Way')
    } else{
        pers.style.bottom = position_v + 'px'
        console.log(position_v)
    }
}
left.addEventListener('click', swap_left)
function swap_left() {
    boots.style.transform = 'rotate(0deg)'
    boots.style.marginTop = '0px'
    boots.style.transform = 'rotate(-180deg)'
    position_h -= 20
    if(position_h<274){
        alert('Wrong Way')
    } else{
        pers.style.left = position_h + 'px'
    }
}