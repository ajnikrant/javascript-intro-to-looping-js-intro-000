function forLoop(frank) {

  for (let i = 0; i < 25; i++) {
    if (i == 1) {
      frank.push(`I am 1 strange loop.`);
    }

    else {frank.push(`I am ${i} strange loops.`);
    }
  }
return frank;
}

function whileLoop(num) {
  while (num > 0) {
    console.log(num);
    --num;
  }
    return "done";
}


let num= 0
function doWhileLoop (num) {
  function incrementVariable() {
    num = num + 1;
    return num;
  }

  do {
  console.log("I run once regardless.");
} while (incrementVariable() < 5);
}



//function incrementVariable() {
//  i = i + 1;
//  return i;
