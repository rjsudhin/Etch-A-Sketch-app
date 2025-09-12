const sizePopupBtn = document.querySelector('.size-popup')
const drawingGrid = document.querySelector('#drawingGrid')
const randomColorsBtn = document.querySelector('.random-colors')

let color = ''

loadingGridContainer(16)

// setup the drawing container
function loadingGridContainer(size) {
  drawingGrid.style.gridTemplateRows = `repeat(${size}, 1fr)`
  drawingGrid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
  const amountOfSize = size * size
  for (let i = 1; i <= amountOfSize; i++) {
    let box = document.createElement('div')
    box.classList.add('box')
    box.addEventListener('mousemove', drawingBoxes)
    drawingGrid.appendChild(box)
  }
}

// size popup button clicks
sizePopupBtn.addEventListener('click', () => {
  let userInputsize = gettingNewGrid()
  loadingGridContainer(userInputsize)

})

// random colors button clicks
randomColorsBtn.addEventListener('click', () => {
  color = 'random'
})

function gettingRandomColors() {
  let r = Math.floor(Math.random() * 256) // random between 0 - 255
  let g = Math.floor(Math.random() * 256) // random between 0 - 255
  let b = Math.floor(Math.random() * 256) // random between 0 - 255
  return `rgb(${r},${g},${b})`
}

// getting new size of grid with prompt result
function gettingNewGrid() {
  let inputResult = false
  while (!inputResult) {
    let userInput = parseInt(prompt('Give a size to new grid'))
    if (!userInput == '' || !userInput == null) {
      if (userInput < 100 && userInput > 3) {
        console.log('user entered value ' + userInput)
        inputResult = true
        return userInput
      } else {
        console.log('please the value in the limit')
      }
    }
    else {
      console.log('Enter a valid size')
    }
  }
}

// drawing each box when the event occurs
function drawingBoxes(e) {
  if (color == 'random') {
    e.target.style.backgroundColor = gettingRandomColors()
  } else {
    e.target.style.backgroundColor = '#252525'
  }
}
