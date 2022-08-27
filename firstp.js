const sliderContainer = document.querySelector('.cotainers')
const slideup = document.querySelector('.rcontent')
const slidedown = document.querySelector('.lcontent')
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
const slidesLength = slideup.querySelectorAll('div').length

let Index = 0

slidedown.style.top = `-${(slidesLength - 1) * 100}vh`

upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))

const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight
    if (direction === 'up') {
        Index++
        if (Index > slidesLength - 1) {
            Index = 0
        }
    } else if (direction === 'down') {
        Index--
        if (Index < 0) {
            Index = slidesLength - 1
        }
    }

    slideup.style.transform = `translateY(-${Index * sliderHeight}px)`
    slidedown.style.transform = `translateY(${Index * sliderHeight}px)`
}