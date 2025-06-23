const prevButton = document.getElementById('prev')
const nextButton = document.getElementById('next')
const items = document.querySelectorAll('.item')
const dot = document.querySelectorAll('.dot')
const nuberIndicator = document.querySelector('.numbers')
const list = document.querySelector('.list')




let active = 0;
const total = items.length
let timer;



function update(direction) {

    document.querySelector('.item.active').classList.remove('active')
    document.querySelector('.dot.active').classList.remove('active')
    


    if (direction > 0) {
          active = active + 1

          if(active === total) {
            active = 0


          }

    } else if (direction < 0) {
    active = active - 1

    if (active< 0) {

        active = total - 1
    }

    }


items[active].classList.add('active')
dot[active].classList.add('active')

nuberIndicator.textContent = String(active + 1).padStartI(2,'0')


}

clearInterval(timer)
timer = setInterval(() => {
    update(1)
}, 10000);



prevButton.addEventListener('click', function()  {
    update(-1)
    

})


nextButton.addEventListener('click', function()  {
 update(1)
    

})