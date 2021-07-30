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
 
   let input = "hello lili";
    input = input.toUpperCase();
  
    //inserting Rows & Cells
    for (let j = 0; j < 5; j++) {
      var tr = table.insertRow();
      for (let i = 0; i < input.length; i++) {
        for (let k = 0; k < letters[input[i]][0].length + 1; k++) {
          if (i == input.length - 1) {
            if (k == letters[input[i]][0].length) {
              break;
            }
          }
          var td = tr.insertCell();
        }
      }
    }
  
    let keys = Object.keys(letters);
  
    //   for (let k = 0; k < table.rows[0].cells.length; k += 4) {
    //     for (let j = 0; j < letters[input[k / 4]].length; j++) {
    //       for (let z = 0; z < letters[input[k / 4]][j].length; z++) {
    //         for (let m = 0; m < keys.length; m++) {
    //           if (keys[m] == input[k / 4]) {
    //             if (letters[input[k / 4]][j][z] == 1) {
    //               console.log("hello");
    //               table.rows[j].cells[z + k].style.backgroundColor = "blue";
    //             }
    //             break;
    //           }
    //         }
    //       }
    //     }
    //   }
    for (let k = 0; k < input.length; k++) {
      for (let m = 0; m < keys.length; m++) {
        if (keys[m] == input[k]) {
          let inputRow = letters[input[k]].length;
          cells += inputCell;
          inputCell = letters[input[k]][0].length + 1;
  
          for (let j = 0; j < inputRow; j++) {
            for (let z = 0; z < inputCell; z++) {
              if (letters[input[k]][j][z] == 1) {
                console.log("hello");
                table.rows[j].cells[z + cells].className += "painting";
              }
            }
          }
        }
      }
    }
  
  