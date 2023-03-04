module.exports = (...args) => {
  const filtered = args.filter((item) => "string" === typeof item);
  const uniqueSet = new Set(filtered);
  return [...uniqueSet.values()].join(" ");
};
