module.exports = {
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    es6: true
  },
  rules: {
    'indent': ['error', 2],
    'semi': ['error', 'always'],
    'semi-style': ['error', 'last'],
    'arrow-parens': ['error', 'always'],
    'arrow-spacing': ['error', {before: true, after: true}],
    'no-var': 'error',
    'prefer-const': 'warn',
    'eqeqeq': ['error', 'smart'],
    'no-console': 'off',
    'no-debugger': 'warn'
  }
};

