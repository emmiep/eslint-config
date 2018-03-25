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
    'semi-spacing': ['error', {before: false, after: true}],
    'arrow-parens': ['error', 'always'],
    'arrow-spacing': ['error', {before: true, after: true}],
    'object-curly-spacing': ['error', 'never'],
    'array-bracket-spacing': ['error', 'never'],
    'block-spacing': ['error', 'always'],
    'func-call-spacing': ['error', 'never'],
    'brace-style': ['error', '1tbs', {allowSingleLine: true}],
    'curly': ['error', 'multi-line'],
    'dot-location': ['error', 'property'],
    'no-multi-spaces': 'error',
    'no-var': 'error',
    'prefer-const': 'warn',
    'eqeqeq': ['error', 'smart'],
    'no-console': 'off',
    'no-debugger': 'warn'
  }
};

