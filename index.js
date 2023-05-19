const classnames = require('./src/classnames.js');
const joined = require('./src/joined.js');

const Overclass = (styles = {}) => Overclass.oc(styles);

Overclass.oc =
  (styles = {}) =>
  (literal, ...args) =>
    joined(...classnames(literal, ...args).map(item => styles[item] || item));

Overclass.classnames = (literal, ...args) =>
  classnames(literal, ...args).join(' ');
Overclass.cn = Overclass.classnames;

Overclass.joined = (...args) => joined(...args);
Overclass.jn = Overclass.joined;

module.exports = Overclass;
