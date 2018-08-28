module.exports = (strings, ...args) => {
  const parsedStrings = strings.reduce((acc, curr, i) => `${acc} ${args[i - 1] || ''} ${curr}`, '');
  return parsedStrings
    .replace(/\s+/gm, ' ')
    .trim()
    .split(' ');
};
