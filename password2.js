const obfuscate = function(input) {
  let obfuscated = '';
  for (const char of input) {
    switch (char) {
    case 'a': obfuscated += '4'; break;
    case 'e': obfuscated += '3'; break;
    case 'o': obfuscated += '0'; break;
    case 'l': obfuscated += '1'; break;
    default: obfuscated += char;
    }
  }
  return obfuscated;
};

const input = process.argv[2];
console.log(input ? obfuscate(input) : 'Please enter a valid password');