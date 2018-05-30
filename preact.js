module.exports = {
  extends: [
    './react.js'
  ],
  settings: {
    react: {
      pragma: 'h'
    }
  },
  rules: {
    'react/prop-types': 'off' /* no PropType checking */
  }
};

