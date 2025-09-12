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


// drawing each box when the event occurs
function drawingBoxes(e) {
  console.log(e)
  e.target.style.backgroundColor = '#252525'
}