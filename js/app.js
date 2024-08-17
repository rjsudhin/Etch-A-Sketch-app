let color = '#252525'

// making 16 x 16 display when load every time
loadingContainerBoards(16)

// creation of boards of container
function loadingContainerBoards(size) {
    const drawingContainer = document.querySelector('#drawing-container')
    const containerStyle = drawingContainer.style
    containerStyle.display = 'grid'
    containerStyle.gridTemplateColumns = `repeat(${size}, 1fr)`
    containerStyle.gridTemplateRows = `repeat(${size}, 1fr)`

    const amountOfBoards = size * size
    for (let i = 0; i < amountOfBoards; i++) {
        let board = document.createElement('div')
        board.classList.add('board')
        board.addEventListener('mousemove', drawingBoards)
        drawingContainer.appendChild(board)
    }
}

function drawingBoards(e) {
    e.target.style.backgroundColor = color
    console.log('drawing ' + e.target.style.backgroundColor)
}