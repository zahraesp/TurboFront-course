var Arr1 = [
  undefined,
  undefined,
  2,
  3,
  4,
  NaN,
  false,
  false,
  undefined,
  5,
  6,
  7,
  null,
  3,
  3,
  2,
  false,
  false,
  2,
  "hazel",
  "hazel",
];

const Arr2 = [
  99,
  5,
  10,
  "turbo",
  "front",
  undefined,
  undefined,
  undefined,
  "turboFront",
  "front",
  2,
  null,
  NaN,
  NaN,
  NaN,
  99,
  "front",
  87,
  "turboFront",
  NaN,
  "turboFront",
  99,
];

function del(input) {
  for (i = 0; i < input.length; i++) {
    if (
      input[i] === null ||
      Number.isNaN(input[i]) ||
      input[i] === false ||
      input[i] === undefined
    ) {
      input.splice(i, 1);
      i--;
    }
  }
  return input;
}

function find(Arr2) {
  let newArr = [];
  let max = 0;
  let result = [];
  del(Arr2);

  for (let i in Arr2) {
    newArr[Arr2[i]] = (newArr[Arr2[i]] || 0) + 1;
    if (newArr[Arr2[i]] > max) {
      max = newArr[Arr2[i]];
    }
  }
  for (let i in newArr) {
    if (newArr[i] == max) {
    //   if (Number.isNaN(parseInt(i))) {
    //     result.push(i);
    //   } else {
    //     result.push(parseInt(i));
    //   }
    console.log(i);
    }
  }
//   return result;
}

console.log("TheMostFrequentElements in Arr1: ");
find(Arr1);
console.log("TheMostFrequentElements in Arr2: ");
find(Arr2);
console.log("Arr1 + Arr2: ", Arr1.concat(Arr2));
