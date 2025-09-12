const sizePopupBtn = document.querySelector('.size-popup')
const drawingGrid = document.querySelector('#drawingGrid')


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
  console.log(e)
  e.target.style.backgroundColor = '#252525'
}