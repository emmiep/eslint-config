module.exports = {
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 2018,
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
    'comma-spacing': ['error', {before: false, after: true}],
    'keyword-spacing': ['error', {before: true, after: true}],
    'key-spacing': ['error', {beforeColon: false, afterColon: true}],
    'space-in-parens': ['error', 'never'],
    'comma-style': ['error', 'last'],
    'brace-style': ['error', '1tbs', {allowSingleLine: true}],
    'curly': ['error', 'multi-line'],
    'dot-location': ['error', 'property'],
    'quotes': ['error', 'single', {avoidEscape: true}],
    'jsx-quotes': ['error', 'prefer-single'],
    'no-multi-spaces': 'error',
    'eol-last': ['error', 'always'],
    'no-var': 'error',
    'prefer-const': 'warn',
    'object-shorthand': 'warn',
    'no-param-reassign': 'error',
    'eqeqeq': ['error', 'smart'],
    'no-console': 'off',
    'no-debugger': 'warn',
  }
};

