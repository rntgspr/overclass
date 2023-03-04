const classnames = require("./src/classnames.js");
const joined = require("./src/joined.js");

const Overclass = (styles = {}) => Overclass.oc(styles);

Overclass.oc =
  (styles = {}) =>
  (strings, ...args) =>
    classnames(strings, ...args)
      .map((item) => styles[item] || item)
      .join(" ");

Overclass.cn = (strings, ...args) =>
  classnames(strings, ...args)
    .filter((item) => !!item)
    .join(" ");

Overclass.jn = (...args) => joined(...args);

module.exports = Overclass;
