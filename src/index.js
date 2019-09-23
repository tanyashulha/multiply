module.exports = function multiply(first, second) {
  let firstString = first.split('').reverse();
  let secondString = second.split('').reverse();

  let stack = [];

  for (let i = 0; i < firstString.length; i++) {
    for (let j = 0; j < secondString.length; j++) {
      let m = firstString[i] * secondString[j];
      stack[i + j] = (stack[i + j]) ? stack[i + j] + m : m;
    }
  }

  for (let i = 0; i < stack.length; i++) {
    let num = stack[i] % 10;
    let move = Math.floor(stack[i] / 10);
    stack[i] = num;

    if (stack[i + 1])
      stack[i + 1] += move;
    else if (move != 0)
      stack[i + 1] = move;
  }


  return stack.reverse().join('');
};