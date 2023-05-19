module.exports = (...args) => {
  const filtered = args.reduce((result, item) => {
    if ('string' === typeof item) {
      const trimmed = item.trim();
      if (trimmed) {
        return result.concat(trimmed);
      }
    }
    return result;
  }, []);

  const uniqueSet = new Set(filtered);
  return [...uniqueSet.values()].join(' ');
};
