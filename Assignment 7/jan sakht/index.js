function Prime(n) {
  let i = 2;
  for (i = 2; i <= n / 2; i++) {
    if (n % i === 0) {
      return false;
    } else {
      return true;
    }
  }
}

function digit(num) {
  let j = 0;
  while (num > 0) {
    num = num / 10;
    j = +1;
  }
  return j;
}

let bool = 0;
let n = 9;
let i = 2;
let k = 0;
let j = digit(n);

while (n>0) {
  for (i = 2; i <= n / 2; i++) {
    if (n % i === 0) {
      bool = -1;
    }
  }
  n = n / 10;
}

if (bool==0) {
  console.log("yes");
} else {
  console.log("no");
}
