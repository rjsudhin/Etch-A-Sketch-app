let color = '#252525'
let click = false

const messageOutput = document.querySelector('#message')
messageOutput.classList.add('message-output')
messageOutput.textContent = 'click then draw'

const selectionSizePopBtn = document.querySelector('.size-selection-btn')
const blackBtn = document.querySelector('.black')
const randomBtn = document.querySelector('.random')
const resetBtn = document.querySelector('.reset')


// click then draw
const drawingContainer = document.querySelector('#drawing-container')
drawingContainer.addEventListener('click', (e) => {
    if (e.target.tagName != 'BUTTON') {
        click = !click
        if (click) {
            messageOutput.textContent = 'Ready for drawing'
        } else {
            console.log('click then draw')
            messageOutput.textContent = 'Click then draw'
        }
    }
})

selectionSizePopBtn.addEventListener('click', (e) => {
    const userInput = gettingUserInputSize()
    loadingContainerBoards(userInput)
})

blackBtn.addEventListener('mousedown', () => {
    let colorChoice = '#252525'
    console.log('black color selected')
    changingColorChoice(colorChoice)
})

randomBtn.addEventListener('mousedown', () => {
    let colorChoice = 'random'
    console.log('random color selected')
    changingColorChoice(colorChoice)
})

resetBtn.addEventListener('mousedown', () => {
    removingAllColors()
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
    if (click) {
        if (!messageOutput.textContent == '') {
            messageOutput.textContent = ''
        }
        if (color == 'random') {
            e.target.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
            console.log('drawing ' + e.target.style.backgroundColor)

        } else {
            e.target.style.backgroundColor = color
            console.log('drawing ' + e.target.style.backgroundColor)
    
        }
    }
}


function changingColorChoice(choice) {
    color = choice
}

function removingAllColors() {
    const allBoards = document.querySelectorAll('.board')
    allBoards.forEach((board) => {
        board.style.backgroundColor = '#615c5c00'
    })
}