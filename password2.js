const obfuscate = function(input) {
  let obfuscated = '';
  for (let i = 0; i < input.length; i++) {
    if (input[i] === 'a') {
      obfuscated += '4';
    } else if (input[i] === 'e') {
      obfuscated += '3';
    } else if (input[i] === 'o') {
      obfuscated += '0';
    } else if (input[i] === 'l') {
      obfuscated += '1';
    } else {
      obfuscated += input[i];
    }
  }
  return obfuscated;
};

console.log(obfuscate('password'));

const input = process.argv[2];
if (input) {
  console.log(obfuscate(input));
};