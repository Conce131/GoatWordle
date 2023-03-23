const CONTAINER = document.querySelector('.wordle')
const word = 'Luciernaga'

function createTable() {
  let counter = 0

  for (let i = 0; i < 6; i++) {
    counter++
    const row = document.createElement('div')
    row.className = 'row'
    for (const i in word) {
      const input = document.createElement('input')
      input.maxLength = '1'
      input.addEventListener('keyup', function (event) {
        checkLetter(event)
      })
      input.dataset.index = i
      row.appendChild(input)
    }
    CONTAINER.appendChild(row)
    const br = document.createElement('br')
    CONTAINER.appendChild(br)
  }
}

createTable(word)

function checkLetter() {
  const letter = event.target.value.toLowerCase()
  const index = Number(event.target.dataset.index)
  console.log(`Letra actual: ${letter}, Letra en indice ${index}: ${word[index]}`)
  if (letter === word[index].toLowerCase()) {
    event.target.style.backgroundColor = 'green'
  } else if (word.includes(letter)) {
    console.log(letter)
    event.target.style.backgroundColor = 'yellow'
  } else {
    event.target.style.backgroundColor = 'black'
  }
}
