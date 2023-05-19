module.exports = {
  extends: ['eslint:recommended', 'plugin:node/recommended', 'prettier'],
  plugins: ['prettier'],
  env: {
    node: true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest',
  },
  rules: {
    'prettier/prettier': 0,
  },
  ignorePatterns: ['./node_modules'],
};
