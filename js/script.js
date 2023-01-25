'use strict'

// Constants
const MINE = '💣'
const EMPTY = ''

// Model
var gBoard
var gLevel = {
  SIZE: 4,
  MINES: 2,
}
var gGame = {
  isOn: false,
  shownCount: 0,
  markedCount: 0,
  secsPassed: 0,
}

function onInit() {
  gBoard = buildBoard(gLevel)
  renderBoard(gBoard, '.board-container')
  console.log(gBoard) // Debugging
}

// A function that builds and returns a board with randomly placed mines
function buildBoard(level) {
  // Create empty board and a mine counter
  var board = []
  var mineCounter = 0

  // Fill board with objs (some are mines)
  for (var i = 0; i < level.SIZE; i++) {
    board.push([])
    for (var j = 0; j < level.SIZE; j++) {
      // Random chance for cell to be a mine, if max mines is not reached
      var isMine = false
      if (mineCounter < level.MINES && Math.random() >= 0.72) {
        isMine = true
        mineCounter++
      }

      // Insert cell obj in this location
      board[i][j] = {
        minesAroundCount: 0,
        isShown: false,
        isMine: isMine,
        isMarked: false,
      }
    }
  }

  //  Update minesAroundCount if cell is not a mine
  for (var i = 0; i < level.SIZE; i++) {
    for (var j = 0; j < level.SIZE; j++) {
      var currCell = board[i][j]
      if (!currCell.isMine) {
        currCell.minesAroundCount = getMinesNegsCount(board, i, j)
      }
    }
  }

  return board
}

// A function which renders the board
function renderBoard(board, selector) {
  // Create html string to represnt the board
  var strHTML = '<table><tbody>'
  for (var i = 0; i < board.length; i++) {
    strHTML += '<tr>'
    for (var j = 0; j < board[0].length; j++) {
      // Initially, all cells are hidden
      strHTML += `<td onclick="onCellClicked(this,${i}, ${j})" class="hidden-cell"></td>`
    }
    strHTML += '</tr>'
  }
  strHTML += '</tbody></table>'

  // Inject html string into board container
  var elBoardContainer = document.querySelector(selector)
  elBoardContainer.innerHTML = strHTML
}

// A function which counts cell neighbors (mines)
function getMinesNegsCount(board, cellI, cellJ) {
  var minesNegsCount = 0
  // looping through all surrounding cells of current cell
  for (var i = cellI - 1; i <= cellI + 1; i++) {
    // Won't count beyond border
    if (i < 0 || i >= board.length) continue
    for (var j = cellJ - 1; j <= cellJ + 1; j++) {
      // Won't count current cell
      if (i === cellI && j === cellJ) continue
      if (j < 0 || j >= board[i].length) continue
      if (board[i][j].isMine === true) minesNegsCount++
    }
  }
  return minesNegsCount
}

// A function which handels the affect of a cell being clicked
function onCellClicked(elCell, i, j) {
  var currCell = gBoard[i][j]
  if (currCell.isMine) {
    elCell.classList.add('mine-cell')
    elCell.innerHTML = MINE
  } else {
    elCell.classList.add('num-cell')
    if (currCell.minesAroundCount === 0) {
      elCell.innerHTML = ''
    } else {
      elCell.innerHTML = currCell.minesAroundCount
    }
  }
}

// A function which handles the level (aka difficulty) selection
function levelSelect(level) {
  switch (level) {
    case 1:
      gLevel.SIZE = 4
      gLevel.MINES = 2
      break
    case 2:
      gLevel.SIZE = 8
      gLevel.MINES = 14
      break
    case 3:
      gLevel.SIZE = 12
      gLevel.MINES = 32
      break
  }
  onInit()
}

// For later use
function onCellMarked(elCell) {}
function checkGameOver() {}
function expandShown(board, elCell, i, j) {}
