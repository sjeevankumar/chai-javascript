const form = document.querySelector('form')

const checkBMIRange = (bmi) => {
    if (bmi < 18.6) return 'Underweight'
    if (bmi <= 24.9) return 'Normal range'
    return 'Overweight'
}

const calculateBMI = (e) => {
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerText = `Please enter a valid height ${height}`
        return
    }
    if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerText = `Please enter a valid weight ${weight}`
        return
    }
    const bmiValue = (weight / ((height ** 2) / 10000)).toFixed(2)
    const bmiRange = checkBMIRange(bmiValue)
    results.innerText = `${bmiValue} ${bmiRange}`
}

form.addEventListener('submit', calculateBMI)