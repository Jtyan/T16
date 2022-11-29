// Define arrays
const rowWin = [
    ["O", "O", "O"],
    ["", "", ""],
    ["", "", ""]
]

const colWin = [
    ["", "X", ""],
    ["", "X", ""],
    ["", "X", ""]
]

const diagonalWin = [
    ["", "", "O"],
    ["", "O", ""],
    ["O", "", ""]
]

const diagonalWinInverse = [
    ["X", "", ""],
    ["", "X", ""],
    ["", "", "X"]
]

// evaluatePlay function.
// Within this function, write the code to evaluate weather a winning play has been made or not
// Your program must be able to evaluate all the grids defined above.
// The function should inform the user of which sign has  won and which sign has lost
// You may add additional parameters to assist you
function evaluatePlay(grid){ 
    printBoard(grid)                         // printing out the board
    let horizontalSum = {"X" : 0, "O" : 0}   // different sum for different win conditions
    let verticalSum = {"X" : 0, "O" : 0}
    let diagSum = {"X" : 0, "O" : 0}
    let inverseDiagSum = {"X" : 0, "O" : 0}
    for (i = 0; i < grid.length; i++) {     // loop through the row, then loop through inside the row
        let row = grid[i]
        horizontalSum = {"X" : 0, "O" : 0}  //reset the horizontal and vertical sum after checking each row or column so that the previous sum doesn't affect the win condition 
        verticalSum = {"X" : 0, "O" : 0}
        for (j = 0; j < row.length; j++){
                horizontalSum[grid[i][j]] ++
                verticalSum[grid[j][i]] ++
            if (i === j){                  // only add into the sum if the row and column index are the same (conditon for diagonal win) 
                inverseDiagSum[grid[i][j]] ++
            }
            if (j === 2 - i){              // only add into the sum if the row and column are in inverse position (condition for inverse diagonal win)
                diagSum[grid[i][j]] ++
            }
            if (verticalSum["X"] === 3 || horizontalSum["X"] === 3 || inverseDiagSum["X"] === 3 || diagSum["X"] === 3){ // if marker X adds to 3, then print X won O lost.
                console.log(`X won, \nO lost.`)
                break
            }
            if (verticalSum["O"] === 3 || horizontalSum["O"] === 3 || inverseDiagSum["O"] === 3 || diagSum["O"] === 3){ // if marker O adds up to 3, then print O won, X lost.
                console.log(`O won,\nX lost.`)
                break
            }
        }
    }
};

function printBoard(grid) {
    let line = "| "
    console.log("-------------")
    for (i = 0; i < grid.length; i++){
        for (j = 0; j < grid.length; j++){
            line += ((grid[i][j]) === "" ? " " : grid[i][j]) // if it's empty, then add a space.
            line += " | "
        }
        console.log(line) //after looping through first row in the array, create a new line
        line = "| "
        console.log("-------------")
    }
    console.log()
}
evaluatePlay(rowWin)
evaluatePlay(colWin)
evaluatePlay(diagonalWin)
evaluatePlay(diagonalWinInverse)