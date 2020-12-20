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
  while (num >0) {
    --num;
    console.log(num);
  }
    return "done";
}
