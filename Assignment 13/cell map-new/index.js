var letters = {
  A: [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
    [1, 0, 1],
    [1, 0, 1],
  ],
  B: [
    [1, 0, 0],
    [1, 0, 0],
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ],
  C: [
    [1, 1, 1],
    [1, 0, 0],
    [1, 0, 0],
    [1, 0, 0],
    [1, 1, 1],
  ],
  D: [
    [0, 0, 1],
    [0, 0, 1],
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ],
  E: [
    [1, 1, 1],
    [1, 0, 0],
    [1, 1, 0],
    [1, 0, 0],
    [1, 1, 1],
  ],
  F: [
    [1, 1, 1],
    [1, 0, 0],
    [1, 1, 0],
    [1, 0, 0],
    [1, 0, 0],
  ],
  G: [
    [1, 1, 1, 1],
    [1, 0, 0, 0],
    [1, 0, 1, 1],
    [1, 0, 0, 1],
    [1, 1, 1, 1],
  ],
  H: [
    [1, 0, 1],
    [1, 0, 1],
    [1, 1, 1],
    [1, 0, 1],
    [1, 0, 1],
  ],
  I: [
    [1, 1, 1],
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
    [1, 1, 1],
  ],
  J: [
    [1, 1, 1],
    [0, 0, 1],
    [0, 0, 1],
    [1, 0, 1],
    [1, 1, 1],
  ],
  K: [
    [1, 0, 0, 1],
    [1, 0, 1, 0],
    [1, 1, 0, 0],
    [1, 0, 1, 0],
    [1, 0, 0, 1],
  ],
  L: [
    [1, 0, 0],
    [1, 0, 0],
    [1, 0, 0],
    [1, 0, 0],
    [1, 1, 1],
  ],
  M: [
    [1, 1, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1],
  ],
  N: [
    [1, 1, 1],
    [1, 0, 1],
    [1, 0, 1],
    [1, 0, 1],
    [1, 0, 1],
  ],
  O: [
    [1, 1, 1],
    [1, 0, 1],
    [1, 0, 1],
    [1, 0, 1],
    [1, 1, 1],
  ],
  P: [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
    [1, 0, 0],
    [1, 0, 0],
  ],
  Q: [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
    [0, 0, 1],
    [0, 0, 1],
  ],
  R: [
    [1, 0, 0, 1],
    [1, 0, 1, 0],
    [1, 1, 0, 0],
    [1, 0, 0, 0],
    [1, 0, 0, 0],
  ],
  S: [
    [1, 1, 1],
    [1, 0, 0],
    [1, 1, 1],
    [0, 0, 1],
    [1, 1, 1],
  ],
  T: [
    [1, 1, 1],
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
  ],

  // u,v,w,x,y,z --> sometimes later

  " ": [[0], [0], [0], [0], [0]],
};
let table = document.getElementById("table");
let inputText = document.getElementById("input");
let cells = 0;
let inputCell = 0;
let inputSize = [];
let text = "";
let keys = Object.keys(letters);

inputText.onkeydown = function (event) {
  // if (event.keyCode == 8) {
  //   // Backspace
  //   for (let j = 0; j < 5; j++) {
  //     for (let i = 0; i < inputSize[inputSize.length - 1] + 1; i++) {
  //       table.rows[j].deleteCell(-1);
  //     }
  //   }
  //   //text.slice(cells, inputSize[inputSize.length - 1]);
  //   cells -= inputSize[inputSize.length - 1];
  //   inputSize.pop();
  //   if (cells < 0) {
  //     cells = 0;
  //     return null;
  //   }
  // }
  // console.log("deletecell", cells);

  let input = event.key;
  input = input.toUpperCase();

  //inserting Rows & Cells
  var tRow = document.querySelectorAll("tr");

  for (let j = 0; j < 5; j++) {
    for (let k = 0; k < letters[input][0].length + 1; k++) {
      var td = tRow[j].insertCell();
    }
  }

  text += input;
  console.log("text", text);
  inputSize.push(letters[input][0].length);

  console.log("inputsize", inputSize);

  for (let m = 0; m < keys.length; m++) {
    if (keys[m] == input) {
      let inputRow = letters[input].length;
      cells += inputCell;
      inputCell = letters[input][0].length + 1;
      console.log("cells", cells);
      for (let j = 0; j < inputRow; j++) {
        for (let z = 0; z < inputCell; z++) {
          if (letters[input][j][z] == 1) {
            table.rows[j].cells[z + cells].className += "painting";
          }
        }
      }
    }
  }
};
