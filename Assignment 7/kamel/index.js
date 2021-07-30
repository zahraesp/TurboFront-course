

 function input (n) {

  let i = 2;
  let result = 1;
  for (i = 2; i <= n / 2; i++) {
    if (n % i === 0) {
      result += i;
    }
  }
 
  if (result === n) {
    console.log("yes");
  } else {
    console.log("no");
  }
}

input(6);
