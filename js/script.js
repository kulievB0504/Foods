
const modalBtns = document.querySelectorAll('[data-modal]')
const modalBtnsClose = document.querySelectorAll('[data-close]')
const modal = document.querySelector('.modal')

modalBtns.forEach(btn => {
    btn.onclick = () => {
        modal.classList.add('show', 'fade')
    }
})


modalBtnsClose.forEach(btn => {
    btn.onclick = () => {
        modal.classList.remove('show')
    }
})


// tabcontent

const tabcontents = document.querySelectorAll('.tabcontent')
const tabBtns = document.querySelectorAll('.tabheader__item')

tabcontents.forEach(item => item.classList.add('hide', 'fade'))
tabcontents[0].classList.remove('hide')

tabBtns.forEach((btn, idx) => {
    btn.onclick = () => {
        tabBtns.forEach(btn => btn.classList.remove('tabheader__item_active'))
        btn.classList.add('tabheader__item_active')


        tabcontents.forEach(item => item.classList.add('hide'))
        tabcontents[idx].classList.remove('hide')
    }
})




const slides = document.querySelectorAll('.offer__slide')
const prev_btn = document.querySelector('.offer__slider-prev')
const next_btn = document.querySelector('.offer__slider-next')
const current = document.querySelector('#current')
const total = document.querySelector('#total')

let slide_idx = 0
SlideTransparent(slide_idx)



function SlideTransparent(n) {
    if (n === slides.length) {
        slide_idx = 0
    }
    if (n < 0) {
        slide_idx = slides.length - 1
    }

    slides.forEach(el => el.classList.add('hide', 'fade'))
    slides[slide_idx].classList.remove('hide')

    current.innerHTML = slide_idx + 1 < 10 ? `0${slide_idx + 1}` : slide_idx + 1
    total.innerHTML = slides.length < 10 ? `0${slides.length}` : slides.length



}
next_btn.onclick = () => {
    slide_idx++
    SlideTransparent(slide_idx)
}
prev_btn.onclick = () => {
    slide_idx--
    SlideTransparent(slide_idx)
}

// const input = document.querySelectorAll('input')
const nameInp = document.querySelector('input[name="name"]');
const phoneNum = document.querySelector('input[name="phone"]');
const form = document.querySelector('.order__form');


form.onsubmit = (element) => {
    element.preventDefault()
    console.log({ name: nameInp.value, number: phoneNum.value })
};

// input.onfocus = () =>{
//     input.style.border = '1px solid black'
// }

// input.onblur = () => {
//     let value = +input.value

//     if(isNaN(value)){
//         input.style.border = '1px solid green'
//     } else {
//         input.style.border = '1px solid red'

//     }
// }

