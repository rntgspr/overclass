const overclass = (stylesLocal = {}) => (strings, ...args) => {
  const parsedStrings = strings.reduce((acc, curr, i) => `${acc.trim()} ${args[i - 1] || ''} ${curr.trim()}`, '').trim();
  return parsedStrings
    .replace(/\s+/gm, ' ')
    .split(' ')
    .map(item => (stylesLocal[item] || item))
    .join(' ');
};

module.exports = overclass;
