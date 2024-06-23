// generate a random color
const randomColor = () => {
    const hex = "0123456789ABCDEF"
    let color = '#'
    for (let i = 0; i < 6; i++) {
        const randomNum = Math.floor(Math.random() * 16)
        color += hex[randomNum]
    }
    return color
}

let intervalId = null
const startChangingColor = () => {
    const changeBgColor = () => {
        document.body.style.backgroundColor = randomColor()
    }
    if (!intervalId) {
        intervalId = setInterval(changeBgColor, 100)
    }
}

const stopChangingColor = () => {
    clearInterval(intervalId)
    intervalId = null
}

document.querySelector('#start').addEventListener('click', startChangingColor)

document.querySelector('#stop').addEventListener('click', stopChangingColor)
