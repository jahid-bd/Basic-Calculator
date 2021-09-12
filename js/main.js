let buttons = document.querySelectorAll('.btn')
let screen = document.getElementById('screen')
let equal = document.querySelector('.btn-equal')
let clear = document.querySelector('.btn-c')
let back = document.querySelector('.btn-back')

buttons.forEach(btn => {
    btn.addEventListener('click', function(e){
        let value = e.target.dataset.num
        screen.value += value
    })
})

equal.addEventListener('click', function(){
    if(screen.value === ''){
        alert('Please Enter a value')
    }else{
        let answer = eval(screen.value)
        screen.value = answer
    }
})

clear.addEventListener('click', function(e){
    screen.value = ''
})

back.addEventListener('click', function(){
    arrValue = screen.value.split('')
    arrValue.pop()
    screen.value = arrValue.join('')
})