let color = '#252525'

const selectionSizePopBtn = document.querySelector('.size-selection-btn')

selectionSizePopBtn.addEventListener('click', (e) => {
    const userInput = gettingUserInputSize()
    loadingContainerBoards(userInput)
})

// making 16 x 16 display when load every time
loadingContainerBoards(16)

// getting user input size
function gettingUserInputSize() {
    let inputResult = false
    while (inputResult == false) {
        let input = prompt('Enter the size')
        if (input == null || input == '') {
            inputResult = false
        } else {
            inputResult = true
            return input
        }
    }
}

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