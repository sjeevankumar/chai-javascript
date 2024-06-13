const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

const changeBackgroundColor = (e) => {
    const bgColor = e.target.id

    switch (bgColor) {
        case 'grey':
            body.style.backgroundColor = bgColor
            break
        case 'white':
            body.style.backgroundColor = bgColor
            break
        case 'blue':
            body.style.backgroundColor = bgColor
            break
        case 'yellow':
            body.style.backgroundColor = bgColor
            break
        default:
            break
    }
}

buttons.forEach(button => {
    button.addEventListener('click', changeBackgroundColor)
}) 