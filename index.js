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
    'semi-style': ['error', 'last']
  }
};

