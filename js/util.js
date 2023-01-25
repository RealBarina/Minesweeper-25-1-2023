'use strict'

// UNUSED FUNCTIONS //

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1) + min) // The maximum is inclusive and the minimum is inclusive
}

// A function which set the timer.
function getTime() {
  var startTime = Date.now()
  gTimerInterval = setInterval(function () {
    var elapsedTime = Date.now() - startTime
    document.querySelector('.timer').innerHTML = (elapsedTime / 1000).toFixed(3)
  }, 100)
  return gTimerInterval
}

function countNegs(cellI, cellJ, mat) {
  // if we want to count negs
  var negsCount = 0
  // looping through 8 cells of specified cell
  for (var i = cellI - 1; i <= cellI + 1; i++) {
    // wont count beyond border(undefined)
    if (i < 0 || i >= mat.length) continue
    for (var j = cellJ - 1; j <= cellJ + 1; j++) {
      //wont count chosen cell
      if (i === cellI && j === cellJ) continue
      if (j < 0 || j >= mat[i].length) continue

      // if (mat[i][j] === (neg we want to count) negsCount++
    }
  }
  return negsCount
}

//   function getClassName(location) {
//     var cellClass = 'cell-' + location.i + '-' + location.j
//     return cellClass
//   }

// function renderCell(location, value) {
//     // Select the elCell and set the value
//     const elCell = document.querySelector(`.cell-${location.i}-${location.j}`)
//     elCell.innerHTML = value
//   }

// // A function which returns a 'random' empty position on the board.
// function getRandEmptyPos(board) {
//     // Create an array with all empty postions in the board
//     var emptyPoss = []
//     for (var i = 0; i < board.length; i++) {
//       for (var j = 0; j < board[0].length; j++) {
//         if (board[i][j] === EMPTY) {
//           emptyPoss.push({ i, j })
//         }
//       }
//     }

//     // Return random empty position
//     if (!emptyPoss.length) return null
//     var randIdx = getRandomIntInclusive(0, emptyPoss.length - 1)
//     return emptyPoss[randIdx]
//   }

// function createMat(ROWS, COLS) {
//     var mat = []
//     for (var i = 0; i < ROWS; i++) {
//         var row = []
//         for (var j = 0; j < COLS; j++) {
//             row.push('')
//         }
//         mat.push(row)
//     }
//     return mat
// }

// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
//   }
