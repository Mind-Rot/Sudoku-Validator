let puzzle = [[ 8,9,5,   7,4,2,   1,3,6 ],
              [ 2,7,1,   9,6,3,   4,8,5 ],
              [ 4,6,3,   5,8,1,   7,9,2 ],

              [ 9,3,4,   6,1,7,   2,5,8 ],
              [ 5,1,7,   2,3,8,   9,6,4 ],
              [ 6,8,2,   4,5,9,   3,7,1 ],

              [ 1,5,9,   8,7,4,   6,2,3 ],
              [ 7,4,6,   3,2,5,   8,1,9 ],
              [ 3,2,8,   1,9,6,   5,4,7 ]];

function checkSudoku(puzzle){
   //check rows
   function getRow(grid, rowIndex) {
    let row = [];
  
    for (let i = 0; i < grid.length; i++) {
      row.push(grid[rowIndex][i]);
    }
  
    for (let i = 1; i <= 9; i++) {
      if (!row.includes(i)) {
        return false;
      }
    }
    
    return true;
  }

    //check collumns
    function getColumn(grid, columnIndex) {
        let column = [];
      
        for (let i = 0; i < grid.length; i++) {
          if (getRow(grid, i)) {
            column.push(grid[i][columnIndex]);
          } else {
            return false;
          }
        }
      
        for (let i = 1; i <= 9; i++) {
          if (!column.includes(i)) {
            return false;
          }
        }

        return true;
      
      }

    //check section
    function getSection(grid, x, y) {
        let section = [];
      
        for (let i = 0; i < 3; i++) {
          for (let j = 0; j < 3; j++) {
            let row = 3 * x + i;
            let column = 3 * y + j;
      
            if (getColumn(grid, column)) {
              section.push(grid[row][column]);
            } else {
              return false;
            }
          }
        }
      
        for (let i = 1; i <= 9; i++) {
          if (!section.includes(i)) {
            return false;
          }
        }
        return true;
        console.log("True")
      
      }
    
}