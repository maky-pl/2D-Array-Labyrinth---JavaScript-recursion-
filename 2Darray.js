// 2D Array Labyrinth - JavaScript (recursion)

function labyrinth(a) {
  var win = false;
  this.a = a;
  this.traverse = function(column, row) {
    if (this.a[column][row] === this.a[9][9]) {
      console.log("Solved!(" + column + ", " + row + ")");
      win = true;
    } else if (this.a[column][row] == 0) {
      console.log("still looking... (" + column + ", " + row + ")");
      this.a[column][row] = 2; //   just to mark a place that we checked already
      //boundaries of array (rows and columns) x4:
      if (column < this.a.length - 1) {
        this.traverse(column + 1, row);
      }
      if (row < this.a[column].length - 1) {
        this.traverse(column, row + 1);
      }
      if (column > 0) {
        this.traverse(column - 1, row);
      }
      if (row > 0) {
        this.traverse(column, row - 1);
      }
    }
    return win;
  };
}

//true:
var a = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 3]
];

//false:
// var a = [
//   [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
//   [1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
//   [1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
//   [1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
//   [1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
//   [1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
//   [1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
//   [1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
//   [1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
//   [1, 1, 1, 1, 1, 1, 1, 1, 1, 3]
// ];

var search = new labyrinth(a);
search.traverse(0, 0); //start point [0,0] - end point (3) [9,9]
