const number = document.getElementById('number')
const text = document.getElementById('text')
const btn = document.getElementById('btn')

btn.addEventListener('click', fetchAdvice)

async function fetchAdvice() {
  try {
    const response = await fetch('https://api.adviceslip.com/advice')
    const data = await response.json()
    number.innerText = data.slip.id
    text.innerText = data.slip.advice
  } catch (err) {
    console.log(err)
  }
}

fetchAdvice()
