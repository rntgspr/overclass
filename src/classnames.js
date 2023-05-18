const joined = require("./joined");

module.exports = (literal, ...args) =>
  literal
    .reduce(
      (acc, curr, i) => acc.concat([...curr.trim().split(" "), args?.[i]]),
      []
    )
    .filter((item) => !!item);
