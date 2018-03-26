module.exports = {
  extends: [
    './index.js',
    'plugin:react/recommended'
  ],
  rules: {
    /* react code style: jsx */
    'react/self-closing-comp': ['warn', { /* prefer self-closing tags */
      component: true,
      html: true
    }]
  }
};

