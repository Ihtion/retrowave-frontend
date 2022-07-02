module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/prettier'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'prettier/prettier': 1,
    'no-unused-vars': 1,
  },
};
