function occurence(text) {
  const specialCharacters = /[$(){},.;!?/]/g;
  const apostrophe = /[’\\']/g;
  const textTab = text.replace(specialCharacters, '')
    .replace(apostrophe, ' ')
    .toLowerCase().split(' ')
    .filter(word => word.length > 2);
  return textTab.reduce(
    (carry, item) => {
      if (item in carry) {
        carry[item] += 1;
      } else {
        carry[item] = 1;
      }
      return carry;
    }, {},
  );
}

module.exports = occurence;