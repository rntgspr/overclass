const classnames = require("./src/classnames.js");
const joined = require("./src/joined.js");

const Overclass = (styles = {}) => Overclass.oc(styles);

Overclass.oc =
  (styles = {}) =>
  (literal, ...args) =>
    joined(...classnames(literal, ...args).map((item) => styles[item] || item));

Overclass.classnames = (strings, ...args) =>
  classnames(strings, ...args).join(" ");
Overclass.cn = Overclass.classnames;

Overclass.join = (...args) => joined(...args);
Overclass.jn = Overclass.join;

module.exports = Overclass;
