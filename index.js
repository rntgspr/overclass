const classnames = require('./src/classnames.js');

const Overclass = (styles = {}) => Overclass.oc(styles);

Overclass.oc = (styles = {}) =>
  (strings, ...args) =>
    classnames(strings, ...args)
      .map(item => (styles[item] || item))
      .join(' ');

Overclass.cn = (strings, ...args) =>
  classnames(strings, ...args)
    .filter(item => !!item)
    .join(' ');

module.exports = Overclass;
