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
    /* code style */
    'brace-style': ['error', '1tbs', {allowSingleLine: true}], /* curlies on same line */
    'curly': ['error', 'multi-line'], /* require curlies around statements unless on same line */
    'arrow-parens': ['error', 'always'], /* always parentheses around arrow function parameters */
    'semi': ['error', 'always'], /* require semicolons */
    'semi-style': ['error', 'last'], /* semicolons on end of lines */
    'comma-style': ['error', 'last'], /* commas on end of lines */
    'dot-location': ['error', 'property'], /* dots at start of lines when chaining calls */
    'eqeqeq': ['error', 'smart'], /* require type-safe comparisons unless safe */

    /* code style: quotes */
    'quotes': ['error', 'single', {avoidEscape: true}], /* prefer single quotes */
    'jsx-quotes': ['error', 'prefer-single'], /* prefer single quotes in jsx */

    /* code style: spacing */
    'indent': ['error', 2], /* 2 spaces indentation */
    'no-multi-spaces': 'error', /* no multiple spaces */
    'object-curly-spacing': ['error', 'never'], /* no spacing inside object literals */
    'array-bracket-spacing': ['error', 'never'], /* no spacing inside array literals */
    'block-spacing': ['error', 'always'], /* spacing inside inline blocks */
    'func-call-spacing': ['error', 'never'], /* no spacing inside function call */
    'comma-spacing': ['error', {before: false, after: true}], /* only spacing after commas */
    'keyword-spacing': ['error', {before: true, after: true}], /* spacing around keywords */
    'key-spacing': ['error', {beforeColon: false, afterColon: true}], /* only spacing after commas after object keys */
    'space-in-parens': ['error', 'never'], /* no spacing inside parentheses */
    'semi-spacing': ['error', {before: false, after: true}], /* only spacing after semicolons */
    'arrow-spacing': ['error', {before: true, after: true}], /* spacing around arrow */
    'eol-last': ['error', 'always'], /* always newline at end of files */

    /* variables */
    'no-var': 'error', /* disallow var declarations */
    'prefer-const': 'warn', /* prefer const declarations */
    'object-shorthand': 'warn', /* prefer shorthand syntax in object literals */
    'no-param-reassign': 'error', /* disallow function parameter reassignment */

    /* debugging */
    'no-console': 'off', /* allow console output */
    'no-debugger': 'warn', /* discourage debugger statements */
  }
};

