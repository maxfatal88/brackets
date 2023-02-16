// const config1 = [['(', ')']];
// const config2 = [['(', ')'], ['[', ']']];
// const config3 = [['(', ')'], ['[', ']'], ['{', '}']];
// const config4 = [['|', '|']];
// const config5 = [['(', ')'], ['|', '|']];
// const config6 = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']];
// const config7 = [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']];
// const str = '())('

module.exports = function check(str, bracketsConfig) {
  let stack = []
  const pairs = new Map(bracketsConfig)
  for (elem of str) {
    if(pairs.get(stack[stack.length-1])=== elem) {
      stack.pop()
    }
    else{
      stack.push(elem)
    }

    // console.log(elem);

  }
  return stack.length === 0
  // console.log(pairs.get('('));
 
}

// console.log(check(str, config2));
